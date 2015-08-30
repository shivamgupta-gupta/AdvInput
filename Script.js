var inp=document.querySelector('#inp');

inp.addEventListener("keyup",func,false);


var list=["inderlok","ashok park main","punjabi bagh east","shivaji park","madipur","paschim vihar east","paschim vihar west","peeragarhi"
,"udyog nagar","surajmal stadium","nangloi","nangloi railway station","rajdhani park","mundka"];

function func()
{
	var val=inp.value;

	var lis=document.querySelector('#edit');
	var lu=document.getElementsByClassName('lit');

	lis.parentNode.removeChild(lis);
	var dv=document.querySelector('#dv');
	var lis=document.createElement('ul');
	lis.setAttribute('id','edit');

	lis.style.listStyleType="none";
	lis.style.paddingLeft="0";
	lis.style.marginTop="0";
	

	dv.appendChild(lis);

	//if(lu!=undefined&&lu!=null)
	//	for(var i=0;i<lu.length;i++)
	//	{
	//		lu[i].parentNode.removeChild(lu[i]);
	//	}
	if(val!=undefined&&val!=null&&val!="")
		for(var i=0;i<list.length;i++)
		{
			if(list[i].indexOf(val)===0)
			{
				var il=document.createElement('li');
				il.setAttribute('class','lit');
				il.style.border="1px solid black";
				il.style.width="170px";
				il.style.paddingTop="0";
				il.style.marginTop="0";
				il.addEventListener('mouseover',function(){highlight(this)},false);
				il.addEventListener('mouseout',function(){dehighlight(this)},false);
				il.addEventListener('click',function(){fill(this)},false);
				var text=document.createTextNode(list[i]);
				il.appendChild(text);
				lis.appendChild(il);

			}
		}		

}
function highlight(ele)
{
	ele.style.backgroundColor="cyan";
}

function dehighlight(ele)
{
	ele.style.backgroundColor="white";
}
function fill(ele)
{
	inp.value=ele.innerHTML;
}