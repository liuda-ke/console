export type dashboard = {
  avatar: string | number;
  title?: string | number;
  url: string;
  content: string;
  desc: string;
};
function getdashBoard(): dashboard[] {
  let dash: dashboard[] = [];
  dash.push({
    avatar: "NULL",
    url: "http://unraid.3han.cn/login",
    content: "nas服务器",
    desc: "",
    title: "Unraid"
  });
  dash.push({
    avatar: "NULL",
    url: "http://music.3han.cn",
    content: "音乐播放器",
    desc: "",
    title: "Navidrome"
  });
  dash.push({
    avatar: "NULL",
    url: "http://remote.3han.cn:6067",
    content: "文件浏览器",
    desc: "",
    title: "File Browser"
  });
  dash.push({
    avatar: "NULL",
    url: "http://remote.3han.cn:6071/",
    content: "qb下载器",
    desc: "",
    title: "qBittorrent"
  });
  return dash;
}
export default getdashBoard;
