function makeBuffer(){
	let buf = "";
	
	return{
		add: function(string){
			buf += string;
		},
		print: function(){
			console.log(buf);
		},
		clear: function(){
			return buf = "";
		}
	}
	
}

let buffer = makeBuffer();

buffer.add('I love JS');
buffer.print();

buffer.clear();

buffer.add('I like CSGO');
buffer.print();

buffer.clear();

buffer.add(0);
buffer.add(1);
buffer.add(0);
buffer.print();

console.log('===================================');

buffer.clear();
buffer.add('Тест ');
buffer.add("тебе не з'їсть");
buffer.print();

buffer.clear();
buffer.print();

