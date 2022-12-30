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
  dash.push({
    avatar: "NULL",
    url: "http://code.3han.cn",
    content: "在线VSCode",
    desc: "",
    title: "Code-Server"
  });
  dash.push({
    avatar: "NULL",
    url: "http://remote.3han.cn",
    content: "Jellyfin影音播放器",
    desc: "",
    title: "Jellyfin"
  });
  dash.push({
    avatar: "NULL",
    url: "http://remote.3han.cn:6063",
    content: "Jenkins在线编译",
    desc: "",
    title: "Jenkins"
  });
  dash.push({
    avatar: "NULL",
    url: "http://remote.3han.cn:6060",
    content: "音乐播放器",
    desc: "",
    title: "YesPlayMusci"
  });
  dash.push({
    avatar: "NULL",
    url: "http://remote.3han.cn:5083",
    content: "rednode",
    desc: "",
    title: "rednode"
  });
  dash.push({
    avatar: "NULL",
    url: "http://docs.3han.cn",
    content: "在线文档",
    desc: "",
    title: "showdoc"
  });
  dash.push({
    avatar: "NULL",
    url: "http://remote.3han.cn:5100",
    content: "Docker在线查看",
    desc: "",
    title: "simpleDocker"
  });
  return dash;
}
export default getdashBoard;
