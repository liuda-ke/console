import { ProTable } from "@ant-design/pro-components";
import type { ProColumns } from "@ant-design/pro-components";
import React, { useEffect, useState } from "react";
const Table: React.FC<any> = (props: any) => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  useEffect(() => {
    const source = [];
    for (let i = 0; i < 100; i++) {
      const temp: number = Math.round(Math.random() * 30);
      let tempStr = "";
      if (temp > 10 && temp <= 28) {
        tempStr = "还行";
      } else if (temp < 10) {
        tempStr = "有点冷";
      } else if (temp > 28) {
        tempStr = "有点热哦";
      } else {
        tempStr = "有点迷糊";
      }
      source.push({
        id: i,
        datetime: new Date(),
        text: `${tempStr}`,
        temp: `${temp}C°`
      });
    }
    setDataSource(source);
  }, []);
  const columns: ProColumns<any>[] = [
    {
      title: "编号",
      dataIndex: "id",
      valueType: "text",
      hideInSearch: true
    },
    {
      title: "日期",
      dataIndex: "datetime",
      valueType: "dateTime"
    },

    {
      title: "天气",
      dataIndex: "text",
      valueType: "text"
    },
    {
      title: "温度",
      dataIndex: "temp",
      valueType: "text",
      hideInSearch: true
    }
  ];

  return (
    <ProTable<any, any>
      pagination={{
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSize: 10,
        pageSizeOptions: [5, 10, 20, 40, 80, 100]
      }}
      request={async (params: any) => {
        let showDataList = dataSource;
        console.log(params);
        debugger;
        if (params.datetime != null && params.datetime !== "") {
          showDataList = showDataList.filter(
            (m) => m.datetime === params.datetime
          );
        }
        if (params.text != null && params.text !== "") {
          showDataList = showDataList.filter((m) => m.text === params.text);
        }
        console.log();
        return Promise.resolve({
          data: showDataList,
          success: true
        });
      }}
      key="id"
      dataSource={dataSource}
      columns={columns}
    />
  );
};
export default Table;
