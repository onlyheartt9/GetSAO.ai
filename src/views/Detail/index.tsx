import { getDetail } from "@/services/list";
import { ProTable } from "@ant-design/pro-components";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();

  const [data, setData] = useState<any>({});

  const getDetailData = async () => {
    const res = await getDetail({
      productName: state.productName,
      question_list: '["' + state.prompt?.join('","') + '"]',
    });

    setData(res);
  };

  useEffect(() => {
    getDetailData();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1000px]">
        <div className="text-black text-[24px] font-bold">GetSAO.ai</div>
        <div className="mt-2 text-[14px]">ProductName: {state.productName}</div>
        <div className="mt-2 text-[14px]"> Prompt: </div>
        <div className="mt-2 text-[14px]">
          {state.prompt?.map((item: any, index: number) => (
            <div key={item}>
              {index + 1}.{item}
            </div>
          ))}
        </div>
        <Card title="第一部分数据" className="mt-4">
          <Report1 data={data}></Report1>
        </Card>
        <Card title="相关来源数量" className="mt-4">
          <Report2 data={data}></Report2>
        </Card>
        {/* <Card title="第三部分数据" className="mt-4">
          <div>
            <div></div>
          </div>
        </Card> */}
      </div>
    </div>
  );
}

const Report1 = ({ data }: { data: any }) => {
  const [list, setList] = useState<any[]>([]);
  //   const [columns, setColumns] = useState([]);
  const columns = [
    {
      title: "URL 数量",
      dataIndex: "total_links",
    },
    {
      title: "好评",
      dataIndex: "content_relevance_percentage",
      render: (text: any) => {
        return text + "%";
      },
    },
    {
      title: "官方内容",
      dataIndex: "official_sources_percentage",
      render: (text: any) => {
        return text + "%";
      },
    },
    {
      title: "相关",
      dataIndex: "content_relevance_percentage",
      render: (text: any) => {
        return text + "%";
      },
    },
  ];

  useEffect(() => {
    const _data = data?.report_2;
    setList([_data]);
  }, [data]);

  return (
    <div>
      <ProTable
        columns={columns}
        dataSource={list}
        toolBarRender={false}
        search={false}
        pagination={false}
      ></ProTable>
      <div className="mt-4 text-[14px] font-bold">内容平台分发</div>
      <div className="mt-4 rounded-md bg-[#eee] px-4 py-2">
        <div>{"{"}</div>
        {Object.keys(data?.report_2?.content_sourcing_distribution)?.map(
          (key) => (
            <div className="ml-4">
              "{key}":{data?.report_2?.content_sourcing_distribution[key]}
            </div>
          )
        )}
        <div>{"}"}</div>
      </div>
    </div>
  );
};

const Report2 = ({ data }: { data: any }) => {
  const columns = [
    {
      title: "新闻媒体类内容来源总数",
      dataIndex: "Social Media",
    },
    {
      title: "官方来源类内容总数",
      dataIndex: "Press",
    },
    {
      title: "官方来源类内容总数",
      dataIndex: "Official Sources",
    },
    {
      title: "博客及其他替代内容类",
      dataIndex: "Academic Sources",
    },
    {
      title: "多模态内容类总数",
      dataIndex: "Blogs and Alternative Content",
    },
    {
      title: "其他类内容来源总数",
      dataIndex: "Multimodal",
    },
  ];
  const list = [data?.report_4];

  return (
    <div>
      <ProTable
        columns={columns}
        dataSource={list}
        toolBarRender={false}
        search={false}
        pagination={false}
      ></ProTable>
    </div>
  );
};
