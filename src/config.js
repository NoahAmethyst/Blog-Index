const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Arnold Circle Council"; // 个人网站名字

const BLOG_URL = "https://blog.esunr.xyz"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/NoahAmethyst"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.dujin.org/bing/1920.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
    {sortId: 1, title: "AI Assistant"},
    {sortId: 2, title: "Developing..."}
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
    {
        pageId: 1,
        sortId: 1,
        title: "ChatGpt",
        subtitle: "不用魔法的免费ChatGpt，联系我获取使用码",
        //个人chatgpt-nex-web 链接
        url: "",
        icon: "data:image/png;base64,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"
    },
    {
        pageId: 1,
        sortId: 1,
        title: "添加QQ智能机器人",
        subtitle: "通过qq交互使用ChatGpt与其他有趣的功能",
        //添加qq链接
        url: "https://qm.qq.com/q/KMGWvXywKs",
        icon: "data:image/png;base64,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"
    }
    // {
    //     pageId: 2,
    //     sortId: 2,
    //     title: "添加QQ智能机器人",
    //     // subtitle: "副标题",
    //     url: "https://qm.qq.com/q/KMGWvXywKs",
    //     icon: "data:image/png;base64,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"
    // }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
    "愿你走出半生，归来仍是少年",
    "May you wander through the passage of time, emerging as eternal youth upon your return",
    "Que deambules por el sendero del tiempo, emergiendo como juventud eterna al regresar",
    "Puisses-tu errer à travers le cours de la vie, renaissant en éternelle jeunesse à ton retour",
    "Mögest du durch die Weiten der Zeit wandeln und bei deiner Rückkehr als ewige Jugend erstrahlen",
    "我们原本应该在自由中翱翔",
    "Se suponía que seríamos libres",
    "We were supposed to be free",
    "Nous étions censés être libres",
    "Wir sollten frei sein",

]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
    SERVE,
    HOST,
    BLOG_URL,
    BLOG_NAME,
    SORT_DATA,
    PAGES_DATA,
    SLOGAN,
    GITHUB,
    FOOTER_INFO,
    BACKGROUND_IMG_URL,
    RECORD_NUMBER
};
