import { ProCard } from "@ant-design/pro-components";
import React from "react";
import getdashBoard from "./mock";
import type { dashboard } from "./mock";
const Card: React.FC<any> = () => {
  const Render = () => {
    const child = getdashBoard().map((m: dashboard, index: number) => {
      return (
        <ProCard
          title={m.title}
          extra={m.desc}
          hoverable
          bordered
          key={index}
          size="default"
          colSpan={{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }}
          onClick={() => {
            window.open(m.url);
          }}
        >
          {m.content}
        </ProCard>
      );
    });

    return (
      <ProCard
        style={{ marginBlockStart: 8 }}
        gutter={[24, 24]}
        wrap
        bordered
        title=""
      >
        {child}
      </ProCard>
    );
  };
  return <Render />;
};
export default Card;
