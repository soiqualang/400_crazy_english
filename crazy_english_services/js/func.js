dbsrc_arr={'400convs': '400_crazy_english_trans.json', '4000volcas': '4000_Core_English_Vocabulary_Words.json'};

function GetURLParameter(parameter) {
	var url;
	var search;
	var parsed;
	var count;
	var loop;
	var searchPhrase;
	url = window.location.href;
	search = url.indexOf("?");
	if (search < 0) {
		return "";
	}
	searchPhrase = parameter + "=";
	parsed = url.substr(search+1).split("&");
	count = parsed.length;
	for(loop=0;loop<count;loop++) {
		if (parsed[loop].substr(0,searchPhrase.length)==searchPhrase) {
			return decodeURI(parsed[loop].substr(searchPhrase.length));
		}
	}
	return "";
}

function get_dbsrc(dbsrc){
	if(dbsrc!=''){
		return dbsrc_arr[dbsrc];
	}else{		
		var keys = Object.keys(dbsrc_arr);
		return dbsrc_arr[keys[ keys.length * Math.random() << 0]];
	}
}