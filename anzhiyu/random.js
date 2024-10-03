var posts=["2024/10/03/完美匹配/","2024/10/03/Github图床折腾手记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };