	var rand=Math.random();
	var totalCount=21;
	var num=Math.ceil(rand * totalCount);
	var url=`url("images/${num}.jpg")`;
	document.body.style.backgroundImage=url;
	//alert(document.body.style.backgroundImage)
	var head=document.getElementsByTagName('head')[0];
	var link=document.createElement('link');
	link.href=`css/jpgstyle${num}.css`;
	link.rel='stylesheet';
	head.append(link);
