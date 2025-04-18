import { getList } from "@/services/list";
import { ReloadOutlined } from "@ant-design/icons";
import { ProTable } from "@ant-design/pro-components";
import { Button, Card, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    productName: "",
  });

  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const navigate = useNavigate();

  const columns = [
    {
      title: "Prompt",
      dataIndex: "prompt",
    },
    {
      title: "操作",
      dataIndex: "action",
      render: (text: any, record: any) => {
        return (
          <Button
            type="link"
            onClick={() => {
              navigate("/detail", {
                state: { prompt: [record.prompt], productName: keyword },
              });
            }}
          >
            详情
          </Button>
        );
      },
    },
  ];
  const search = async () => {
    setLoading(true);
    const res = await getList(params);
    setLoading(false);
    const _list = res.map((item: any) => ({
      prompt: item,
    }));
    setList(_list as any);
  };

  useEffect(() => {
    if (!params.productName) {
      setList([]);
      return;
    }
    search();
  }, [params]);
  return (
    <div>
      <Card>
        <div className="flex justify-end">
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setParams({ ...params, productName: keyword })}
            >
              <ReloadOutlined />
            </div>
          </div>
        </div>
      </Card>
      <ProTable
        loading={loading}
        columns={columns}
        dataSource={list}
        // rowKey={}
        rowKey="prompt"
        rowSelection={{
          type: "checkbox", // 可选 'radio' 或 'checkbox'
          onChange: (selectedRowKeys: any, selectedRows: any) => {
            setSelectedRowKeys(selectedRowKeys);
          },
        }}
        toolBarRender={false}
        search={false}
        pagination={{
          pageSize: 10,
        }}
      />
      <div className="flex justify-end mt-4">
        <Button
          type="primary"
          onClick={() => {
            navigate("/detail", {
              state: { prompt: selectedRowKeys, productName: keyword },
            });
          }}
        >
          生成报告
        </Button>
      </div>
    </div>
  );
}
