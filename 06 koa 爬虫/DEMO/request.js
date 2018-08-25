const request = require("superagent")
const cheerio = require("cheerio")

    [
    {
        img: "",
        title: "课程名字.ictxt"
    }
    ]
request
    .post("https://www.shiguangkey.com/")
    .end((err, res) => {
        const data = res.text
        const $ = cheerio.load(data)
        //去分析原网页的dom结构

        console.log($(".course-item .item-txt").eq(1).text())
    })
