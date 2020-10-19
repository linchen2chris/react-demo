export const metaData = [
  {
    id: "spinner",
    comp: "Spin",
    data: { size: "large",  spinning: false, tip: "Loading" },
  },
  {
    id: "openurl",
    comp: "MyBtn",
    data: { label: "openurl" },
    events: [
      {
        type: "onClick",
        actions: [{ type: "openURL", data: { url: "http://www.baidu.com" } }],
      },
    ],
  },
  {
    id: "refresh",
    comp: "MyBtn",
    data: { label: "refresh" },
    events: [
      {
        type: "onClick",
        actions: [{ type: "refresh", data: { target: "table" } }],
      },
    ],
  },
  {
    id: "table",
    comp: "MyTable",
    data: {
      dataSource: [],
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "年龄",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "住址",
          dataIndex: "address",
          key: "address",
        },
      ],
    },
  },
];
