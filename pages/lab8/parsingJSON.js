window.onload = () => {
    $("input[type=submit]").click(loadUserData);
};

let urlInfo = "https://jsonplaceholder.typicode.com/users/";
let urlPosts = "https://jsonplaceholder.typicode.com/posts";
let urlComments = "https://jsonplaceholder.typicode.com/comments";

function loadUserData(event) {
    console.log($("#userId").val());
    $.ajax(urlInfo + $("#userId").val(), {
        crossDomain: true
    }).done(displayInfo)
        .fail((err) => { console.log(err); });
    $.ajax(urlPosts, {
        "data": { "userId":  $("#userId").val()},
        crossDomain: true
    }).done(displayPosts)
        .fail((err) => { console.log(err); });
    event.preventDefault();
}

function displayInfo(response) {
    console.log(response);
    $("#info").children().remove();
    generateUserComponent("id", response.id);
    generateUserComponent("name", response.name);
    generateUserComponent("username", response.username);
    generateUserComponent("email", response.email);
    generateUserComponent("phone", response.phone);
    generateUserComponent("website", response.website);
}

function generateUserComponent(key, value) {
    $("#info").append($("<dt>", {
        "text": key
    }));
    $("#info").append($("<dd>", {
        "text": value
    }));
}

function displayPosts(response) {
    console.log(response);
    $("#posts > :not(h3)").remove();
    $("#comments").children().remove();
    let posts = [];
    response.forEach((post) => {
        let elem = $("<div>", {"id": post.id});
        elem.append($("<ul>"));
        elem.append($("<li>", { 'text': post.title }));
        elem.append($("<li>", { 'text': post.body }));
        elem.append($("<button>", { 'text': "Comments" }).click(displayComments(post.id)));
        elem.append($("<hr>", {"class": "dotted-line"}));
        posts.push(elem);
    });
    $("#posts").append(posts);
}

function displayComments(postId) {
    return function(){
        console.log(postId);
        $("div").removeClass('post-background');
        $("#" + postId).addClass('post-background');
        $.ajax(urlComments, {
            "data": { "postId":  postId},
            crossDomain: true
        }).done(generateCommentComponent)
            .fail((err) => { console.log(err); });
    };
}

function generateCommentComponent(response) {
    $("#comments").children().remove();
    $("#comments").append($("<h3>", { 'text': "Comments" }));
    let comments = [];
    response.forEach((comment) => {
        let elem = $("<ul>");
        elem.append($("<li>", { 'text': comment.name }));
        elem.append($("<li>", { 'text': comment.email }));
        elem.append($("<li>", { 'text': comment.body }));
        comments.push(elem);
    });
    $("#comments").append(comments);
}