export default function name(req, res) {
    res.status(200).json({
        pageData: {
            name: "陈杭彬",
            bookList: [
                {
                    "bookShowName": "绝色总裁的超级兵王",
                    "bookCoverLogo": "http://cdn1.cmread.com/angle/AT/O/w/QrsB4OYB4QFGVoz24F1BOwQ/cover180240.png",
                    "authorName": "木姑娘",
                    "bookLongDesc": "我是总裁未婚妻的的超级兵王，你们最好离我远一点，不然我媳妇又要吃醋了！",
                    "className": "都市",
                    "wordSize": "455.0万",
                    "showIcon": "0",
                    "bookPrice": "0.10",
                    "chargeMode": "2",
                    "cornerShowType": "",
                }
            ]
        }
    })
}