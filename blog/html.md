## 1、http和https的区别？
- http传输的数据都是未加密的，也就是明文的，网景公司设置了SSL协议来对http协议传输的数据进行加密处理，简单来说https协议是由http和ssl协议构建的可进行加密传输和身份认证的网络协议，比http协议的安全性更高。
  - 主要的区别如下：
  - Https协议需要ca证书，费用较高。
  - http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
  - 使用不同的链接方式，端口也不同，一般而言，http协议的端口为80，https的端口为443
  http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
