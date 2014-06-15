var open = require('open');
if(process.argv.length < 3){
	console.log('需要输入一个关键词哦~');
	console.log('Usage: baidu [keyword]');
	process.exit(1);
}else{
	var keyword = process.argv[2];
	var url = "http://baidu.com/s?wd="+encodeURIComponent(keyword);
	open(url);
	process.exit(0);
}