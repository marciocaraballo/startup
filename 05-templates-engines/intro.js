(function(){
	dust.register("intro",body_0);
	function body_0(chk,ctx){
		return chk.write("<div id='entry'><h1>Professional Profile</h1><div class='profileContainer'><img class='imgAlling' src=").reference(ctx.get("ing"),ctx,"h").write("><p>").reference(ctx.get("name"),ctx,"h").write("</p><p>Current position ").reference(ctx.get("current"),ctx,"h").write("</p><p>Experience<ul>").section(ctx.get("jobs"),ctx,{"block":body_1},null).write("</ul></p><p>Education<ul>").section(ctx.get("eds"),ctx,{"block":body_2},null).write("</ul></p></div></div>");
	}
	function body_1(chk,ctx){
		return chk.write("<li class='listItem'>").reference(ctx.getPath(true,[]),ctx,"h").write("\n</li>");
	}
	function body_2(chk,ctx){
		return chk.write("<li class='listItem'>").reference(ctx.getPath(true,[]),ctx,"h").write("\n</li>");
	}
	return body_0;})(); 