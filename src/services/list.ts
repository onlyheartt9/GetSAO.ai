import request from "./fetch";
export const getList = async (params: any) => {
  const token = "app-fxW0dosDvvKSRIgdyR82kq9D";
  const response = await request.post(
    "https://api.dify.ai/v1/workflows/run",
    {
      inputs: params,
      response_mode: "blocking",
      user: "abc-123",
    },
    {
      token: token,
    }
  );
  const list = response.data.outputs.questionList;
  return list;
};

export const getDetail = async (params: any) => {
  const token = "app-US464lrAYsRnI1GeWOt0xF8K";
  const response = await request.post(

  
    "https://api.dify.ai/v1/workflows/run",
    {
      inputs: params,
      response_mode: "blocking",
      user: "abc-123",
    },
    {
      token: token,
    }
  );
  const response1 = {
    task_id: "e7eba740-a22c-422f-8fed-2b6bddbe858c",
    workflow_run_id: "a1e8c1ff-fe09-4707-8e90-ba0c8854261d",
    data: {
      id: "a1e8c1ff-fe09-4707-8e90-ba0c8854261d",
      workflow_id: "83d998db-8412-4fc2-b222-26438cc80429",
      status: "succeeded",
      outputs: {
        report_1: [
          {
            "Tesla Model S Range": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model S Features": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Performance Capabilities": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Comfort Features": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Charging Network": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Tesla Model Comparison": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Road Trip Suitability": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
          },
        ],
        log_combined_results: [
          {
            type: "output_text",
            annotations: [
              {
                type: "url_citation",
                end_index: 500,
                start_index: 385,
                title:
                  "Which Tesla Has the Longest Range? Find Out Which Model Goes the Distance! - AP Tuning",
                url: "https://aptuning.net/car-brands/tesla-tuning/which-tesla-has-the-longest-range/?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 828,
                start_index: 702,
                title:
                  "10 Electric Cars With the Longest Range for Road Trips - DAX Street",
                url: "https://daxstreet.com/list/234233/10-electric-cars-with-the-longest-range-for-road-trips/?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 1499,
                start_index: 1406,
                title:
                  "Edmunds: The longest-range EVs you can buy for under $50,000",
                url: "https://apnews.com/article/bbcb751c9d0be8dbed620b2187f3d688?utm_source=openai",
              },
            ],
            text: "For long road trips, the **Tesla Model S** stands out as the premier choice among Tesla's lineup, primarily due to its exceptional range and performance capabilities.\n\n**Key Features of the Tesla Model S:**\n\n- **Extended Range:** The Model S offers an EPA-estimated range of up to 405 miles on a single charge, minimizing the need for frequent charging stops during extended journeys. ([aptuning.net](https://aptuning.net/car-brands/tesla-tuning/which-tesla-has-the-longest-range/?utm_source=openai))\n\n- **Performance:** Equipped with dual electric motors producing up to 670 horsepower, the Model S delivers rapid acceleration and a smooth, quiet ride, enhancing the driving experience on long trips. ([daxstreet.com](https://daxstreet.com/list/234233/10-electric-cars-with-the-longest-range-for-road-trips/?utm_source=openai))\n\n- **Comfort and Space:** The spacious interior, combined with high-quality materials and advanced technology, ensures comfort for all passengers, making it ideal for extended travel.\n\n- **Charging Infrastructure:** Access to Tesla's extensive Supercharger network facilitates convenient and rapid charging, reducing downtime during road trips.\n\nWhile other Tesla models like the Model 3 and Model Y offer commendable ranges\u2014up to 363 miles and 320 miles, respectively\u2014the Model S's superior range and luxury features make it particularly well-suited for long-distance travel. ([apnews.com](https://apnews.com/article/bbcb751c9d0be8dbed620b2187f3d688?utm_source=openai))\n\nIn summary, the Tesla Model S combines extensive range, high performance, and luxurious comfort, making it the optimal Tesla model for long road trips. ",
          },
        ],
        report_2:
          '{\n"total_links": 3,\n"official_sources_percentage": 0,\n"content_relevance_percentage": 100,\n"useful_content_percentage": 100,\n"useful_content_count": 1,\n"content_sourcing_distribution": {\n"News/Media Sources": 33.3,\n"Automotive Blogs/Websites": 33.3,\n"Automotive Review Sites": 33.3,\n"Official Brand Websites": 0,\n"Social Media": 0,\n"Forums/Discussion Boards": 0\n},\n"sentiment_analysis": {\n"overall_positive_percentage": 80,\n"by_source": [\n{\n"source": "aptuning.net",\n"positive_percentage": 100\n},\n{\n"source": "daxstreet.com",\n"positive_percentage": 100\n},\n{\n"source": "apnews.com",\n"positive_percentage": 100\n}\n]\n}\n}',
        report_3:
          '{\n  "website_summaries": {\n    "aptuning.net": "No negative feedback found. The content focuses on the Tesla Model S\'s extended range capabilities.",\n    "daxstreet.com": "No negative feedback found. The content highlights the Model S\'s performance features.",\n    "apnews.com": "No negative feedback found. The article compares range capabilities across Tesla models."\n  },\n  "weakness_report": []\n}',
        report_4:
          '{"Social Media": 0, "Press": 1, "Official Sources": 0, "Academic Sources": 0, "Blogs and Alternative Content": 2, "Multimodal": 0, "Other": 0}',
      },
      error: null,
      elapsed_time: 38.32821064302698,
      total_tokens: 8624,
      total_steps: 14,
      created_at: 1744978257,
      finished_at: 1744978295,
    },
  };
  const { log_combined_results, report_1, report_2, report_3, report_4 } =
    response.data.outputs ?? {};
  return {
    log_combined_results,
    report_1,
    report_2: JSON.parse(report_2),
    report_3,
    report_4: JSON.parse(report_4),
  };
};
