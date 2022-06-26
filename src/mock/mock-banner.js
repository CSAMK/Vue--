// banner 模块的模拟数据
import Mock from "mockjs";

Mock.mock('/api/banner', 'get', {
    code: 0,
    msg: "",
    data: [
        {
          id: "1",
          midImg: "../assets/image/banner1.png",
          bigImg: "https://img.3dmgame.com/uploads/allimg/170728/379-1FHQSS5.jpg",
          character: "孙悟空",
          description: "我的命运只遵从我的意志",
        },
        {
          id: "2",
          midImg: "../assets/image/banner2.png",
          bigImg: "https://ts1.cn.mm.bing.net/th/id/R-C.3e534fbf3d5305fa599f3f93f8089267?rik=3MoKPRYzz2pujA&riu=http%3a%2f%2fp3.qhimg.com%2ft01648d15eae9a46fef.jpg%3fsize%3d1920x1080&ehk=HkFtTK9%2bTCFC0RF4ta%2fYPDWlGpHZ%2bKozT770Q7cuQdQ%3d&risl=&pid=ImgRaw&r=0",
          character: "孙悟饭",
          description: "努力有时候也战胜不了天分，但至少能让别人看得起你。",
        },
        {
          id: "3",
          midImg: "../assets/image/banner3.png",
          bigImg: "https://ts1.cn.mm.bing.net/th/id/R-C.ecafaa0a23a9172cfbf76c0b5d080187?rik=%2boscmsBVWIN%2f%2fw&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2fw1777h1000%2f20180221%2f40d4-fyrswmu6783576.jpg&ehk=xUN5%2flW%2bVMu%2bvZGVTmi60ubuNy06bR%2b0bXiSgxgRMx8%3d&risl=&pid=ImgRaw&r=0",
          character: "龟仙人",
          description: "头顶依然闪烁，天空超晴朗，我也心胸开阔，超有精神。",
        },
      ]
});