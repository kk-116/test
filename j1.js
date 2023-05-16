var blogs = [
    {
        "title": "Blog Title 1",
        "author": "kk",
        "date": "14/05/2003",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "title": "Blog Title 2",
        "author": "kk",
        "date": "14/05/2003",
        "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        "title": "Blog Title 3",
        "author": "kk",
        "date": "14/05/2003",
        "content": "Suspendisse et dapibus nisl. Nunc eget mauris vel justo hendrerit ullamcorper."
    },
    {
        "title": "Blog Title 4",
        "author": "kk",
        "date": "14/05/2003",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "title": "Blog Title 5",
        "author": "kk",
        "date": "14/05/2003",
        "content": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    },
    {
        "title": "Blog Title 6",
        "author": "kk",
        "date": "14/05/2003",
        "content": "Suspendisse et dapibus nisl. Nunc eget mauris vel justo hendrerit ullamcorper."
    }
];

function shuffle() {
    for (var i = blogs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [blogs[i], blogs[j]] = [blogs[j], blogs[i]];
      }
}
shuffle();

function display() {
    var blogList = document.getElementById('blogList');
    blogList.innerHTML = '';

    for (var i = 0; i < blogs.length; i++) {
        var blogg = blogs[i];

        var blog =  document.createElement('div');
        blog.classList.add('blog');

        var title =  document.createElement('h2');
        title.classList.add('blog-title');
        title.innerText = blogg.title;

        var ad =  document.createElement('div');
        ad.classList.add('blog-ad');

        var adb =  document.createElement('p');
        adb.classList.add('blog-adb');
        adb.innerText = "- By " + blogg.author + " on " + blogg.date;

        var sep = document.createElement('hr');
        sep.classList.add('blog-sep');

        var content =  document.createElement('div');
        content.classList.add('blog-content');

        var contentb =  document.createElement('p');
        contentb.classList.add('blog-contentb');
        contentb.innerText = blogg.content;

        content.append(contentb);
        ad.appendChild(adb);
        blog.appendChild(title);
        blog.appendChild(ad);
        blog.appendChild(sep);
        blog.appendChild(content);
        blogList.appendChild(blog);
    }
}

display();
