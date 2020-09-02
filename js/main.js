//初始化数据
var keys = {
    '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    length: 3
}

var hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'renren.com',
    't': 'tianya.com',
    'y': 'youtube.com',
    'u': 'uc.com',
    'i': 'iqiyi.com',
    'o': 'opera.com',
    'p': undefined,
    'a': 'acfun.tv',
    's': 'sohu.com',
    'z': 'zhihu.com',
    'm': 'mcdonalds.com'
}
var hashInlocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if(hashInlocalStorage){
    hash = hashInlocalStorage
}
//生成键盘
var index = 0
while(index < keys['length']){
    var div1 = document.createElement('div')
    div1.className = 'row'
    zhansan.appendChild(div1)
    var row = keys[index]
    var index1 = 0
    while(index1 < row['length']){
        var kbd = document.createElement('kbd')
        kbd.className = 'key'
       
        var span = document.createElement('sapn')
        span.className = 'text'
        span.textContent = row[index1]
        
        var img = document.createElement('img')
        img.src = 'https://' + hash[row[index1]] + '/favicon.ico'
        img.onerror = function (xxx) {
        }
        
        var button = document.createElement('button')
        button.textContent = 'E'
        button.id = row[index1]
        button.onclick = function(xzkjcnxlkcjlk){
            button2 = xzkjcnxlkcjlk.target
            img2 = button2.previousSibling
            key = xzkjcnxlkcjlk.target.id
            x = prompt('输入网址')
            img2.src = 'https://' + x + '/favicon.ico'
            hash[key] = x
            localStorage.setItem('zzz', JSON.stringify(hash))
        }
       
        div1.appendChild(kbd)
        kbd.append((span))
        if(hash[row[index1]]){
            kbd.append(img)
        }
        kbd.append(button)

        index1++
    }
    index = index + 1
}
//事件监听
document.onkeypress = function (e) {
    var key = e['key']
    var website = hash[key]
    console.log(website)
    //location.href = 'http://' + website //当前页面打开
    window.open('http://' + website, '_blank')  //新标签打开
}