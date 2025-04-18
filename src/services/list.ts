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
    task_id: "0fd524a2-fb14-468d-a307-6976769845a2",
    workflow_run_id: "48ab3ece-519f-465e-b3db-1df3d81239db",
    data: {
      id: "48ab3ece-519f-465e-b3db-1df3d81239db",
      workflow_id: "83d998db-8412-4fc2-b222-26438cc80429",
      status: "succeeded",
      outputs: {
        report_1: [
          {
            "Tesla family models": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model Y seating": {
              total_mentions: 1,
              positive_mentions: 0,
              negative_mentions: 1,
            },
            "Model Y cargo": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model Y performance": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model Y affordability": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model Y family awards": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model X seating": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model X cargo": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model X performance": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model X features": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model X safety": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Budget comparison": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Space considerations": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Feature overview": {
              total_mentions: 1,
              positive_mentions: 1,
              negative_mentions: 0,
            },
            "Model comparison summary": {
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
                end_index: 563,
                start_index: 460,
                title:
                  "Which Tesla Has 3 Rows? Find Out Which Models Offer More Space! - AP Tuning",
                url: "https://aptuning.net/car-brands/tesla-tuning/what-tesla-has-3-rows/?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 834,
                start_index: 733,
                title: "Tesla Model Y for Family of 5 - The Tesla Insider",
                url: "https://theteslainsider.com/tesla-model-y-for-family-of-5/?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 1089,
                start_index: 996,
                title:
                  "Edmunds: The longest-range EVs you can buy for under $50,000",
                url: "https://apnews.com/article/bbcb751c9d0be8dbed620b2187f3d688?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 1301,
                start_index: 1208,
                title:
                  "Edmunds: The longest-range EVs you can buy for under $50,000",
                url: "https://apnews.com/article/bbcb751c9d0be8dbed620b2187f3d688?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 1567,
                start_index: 1451,
                title: "Tesla Model Y Wins Award For Best New Family Car",
                url: "https://insideevs.com/news/673080/tesla-model-y-best-new-car-for-families-2023/?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 1833,
                start_index: 1750,
                title: "Tesla Model X",
                url: "https://en.wikipedia.org/wiki/Tesla_Model_X?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 2083,
                start_index: 1982,
                title: "Tesla Model X for Family of 5 - The Tesla Insider",
                url: "https://theteslainsider.com/tesla-model-x-for-family-of-5/?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 2306,
                start_index: 2223,
                title: "Tesla Model X",
                url: "https://en.wikipedia.org/wiki/Tesla_Model_X?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 2507,
                start_index: 2424,
                title: "Tesla Model X",
                url: "https://en.wikipedia.org/wiki/Tesla_Model_X?utm_source=openai",
              },
              {
                type: "url_citation",
                end_index: 2746,
                start_index: 2663,
                title: "Tesla Model X",
                url: "https://en.wikipedia.org/wiki/Tesla_Model_X?utm_source=openai",
              },
            ],
            text: "When selecting the best Tesla model for family use, the **Tesla Model Y** and **Tesla Model X** are the primary contenders, each offering unique advantages tailored to different family needs.\n\n**Tesla Model Y:**\n\n- **Seating and Space:** The Model Y comes standard with a five-seat configuration and offers an optional third row, expanding capacity to seven passengers. However, the third row is more suitable for children due to limited legroom and headroom. ([aptuning.net](https://aptuning.net/car-brands/tesla-tuning/what-tesla-has-3-rows/?utm_source=openai))\n\n- **Cargo Capacity:** With the rear seats folded down, the Model Y provides up to 68 cubic feet of cargo space, accommodating luggage, groceries, and sports equipment. ([theteslainsider.com](https://theteslainsider.com/tesla-model-y-for-family-of-5/?utm_source=openai))\n\n- **Performance and Range:** The Model Y offers impressive acceleration and a range of up to 320 miles, making it suitable for daily commutes and family trips. ([apnews.com](https://apnews.com/article/bbcb751c9d0be8dbed620b2187f3d688?utm_source=openai))\n\n- **Affordability:** Starting at approximately $44,990, the Model Y is more budget-friendly compared to the Model X. ([apnews.com](https://apnews.com/article/bbcb751c9d0be8dbed620b2187f3d688?utm_source=openai))\n\n- **Family Recognition:** The Model Y has been recognized as a top choice for families, being voted the \"Best Car for Families 2023\" by AutoTrader. ([insideevs.com](https://insideevs.com/news/673080/tesla-model-y-best-new-car-for-families-2023/?utm_source=openai))\n\n**Tesla Model X:**\n\n- **Seating and Space:** The Model X offers seating configurations for five, six, or seven passengers, with more spacious third-row seating suitable for adults. ([en.wikipedia.org](https://en.wikipedia.org/wiki/Tesla_Model_X?utm_source=openai))\n\n- **Cargo Capacity:** With all seats folded, the Model X provides up to 88.1 cubic feet of cargo space, offering ample room for family belongings. ([theteslainsider.com](https://theteslainsider.com/tesla-model-x-for-family-of-5/?utm_source=openai))\n\n- **Performance and Range:** The Model X boasts powerful acceleration and a range of up to 348 miles, catering to longer family journeys. ([en.wikipedia.org](https://en.wikipedia.org/wiki/Tesla_Model_X?utm_source=openai))\n\n- **Unique Features:** The Model X features distinctive falcon-wing doors, enhancing accessibility in tight spaces. ([en.wikipedia.org](https://en.wikipedia.org/wiki/Tesla_Model_X?utm_source=openai))\n\n- **Safety:** The Model X has achieved high safety ratings, including a five-star rating from the National Highway Traffic Safety Administration (NHTSA). ([en.wikipedia.org](https://en.wikipedia.org/wiki/Tesla_Model_X?utm_source=openai))\n\n**Considerations:**\n\n- **Budget:** The Model Y is more affordable, making it an attractive option for families seeking Tesla's technology and performance without a premium price tag.\n\n- **Space Needs:** For larger families or those requiring more spacious third-row seating and cargo capacity, the Model X is more suitable.\n\n- **Features:** Both models offer advanced safety features and access to Tesla's Supercharger network, ensuring convenience and peace of mind during family travels.\n\nIn summary, the **Tesla Model Y** is an excellent choice for families seeking a versatile, efficient, and cost-effective electric SUV. For those needing additional space, luxury features, and are willing to invest more, the **Tesla Model X** stands out as a premium family vehicle. ",
          },
        ],
        report_2:
          '{\n"total_links": 6,\n"official_sources_percentage": 0,\n"content_relevance_percentage": 100,\n"useful_content_percentage": 90,\n"useful_content_count": 1,\n"content_sourcing_distribution": {\n"news_media_sites": 33.33,\n"specialized_enthusiast_blogs": 50,\n"reference_encyclopedia": 16.67,\n"official_sources": 0,\n"review_sites": 0,\n"forums_social_media": 0\n},\n"sentiment_analysis": {\n"overall_positive_percentage": 90,\n"by_source": [\n{\n"source": "AP Tuning",\n"positive_percentage": 25\n},\n{\n"source": "The Tesla Insider (Model Y)",\n"positive_percentage": 100\n},\n{\n"source": "AP News",\n"positive_percentage": 100\n},\n{\n"source": "InsideEVs",\n"positive_percentage": 100\n},\n{\n"source": "Wikipedia",\n"positive_percentage": 100\n},\n{\n"source": "The Tesla Insider (Model X)",\n"positive_percentage": 100\n}\n]\n}\n}',
        report_3:
          '{\n  "website_summaries": {\n    "aptuning.net": "Identifies that the Model Y\'s optional third row seating has limited legroom and headroom, making it only suitable for children rather than adults."\n  },\n  "weakness_report": [\n    {\n      "category": "Interior Space Limitations",\n      "description": "The Tesla Model Y\'s optional third-row seating suffers from limited legroom and headroom, making it uncomfortable or unsuitable for adult passengers. This restricts the vehicle\'s practical capacity for families needing to transport older children or adults in all seating positions.",\n      "sources": [\n        {\n          "website": "aptuning.net",\n          "quote": "The third row is more suitable for children due to limited legroom and headroom."\n        }\n      ]\n    }\n  ]\n}',
        report_4:
          '{"Social Media": 0, "Press": 2, "Official Sources": 4, "Academic Sources": 0, "Blogs and Alternative Content": 4, "Multimodal": 0, "Other": 0}',
      },
      error: null,
      elapsed_time: 51.50331949815154,
      total_tokens: 14646,
      total_steps: 14,
      created_at: 1744985093,
      finished_at: 1744985144,
    },
  };
  const { log_combined_results, report_1, report_2, report_3, report_4 } =
    response.data.outputs ?? {};
  return {
    log_combined_results,
    report_1,
    report_2: JSON.parse(report_2),
    report_3: JSON.parse(report_3),
    report_4: JSON.parse(report_4),
  };
};
