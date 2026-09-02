const main = document.getElementById("main");
const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 12502,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 15137,
  },
];
function createPost(
  name,
  username,
  userComment,
  location,
  avatar,
  postimg,
  likes,
) {
  const post = document.createElement("div");
  post.classList.add("post");

  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");

  const userNameContainer = document.createElement("div");
  userNameContainer.classList.add("user-name-container");

  const userFullName = document.createElement("h2");
  userFullName.classList.add("user-full-name");
  userFullName.textContent = name;

  const locationText = document.createElement("p");
  locationText.classList.add("location-text");
  locationText.textContent = location;

  const userAva = document.createElement("img");
  userAva.classList.add("avatar");
  userAva.setAttribute("alt", `${name}`);
  userAva.src = avatar;

  const postBody = document.createElement("div");
  postBody.classList.add("post-body");

  const postIcons = document.createElement("div");
  postIcons.classList.add("post-icons");

  const like = document.createElement("button");
  const likeIcon = document.createElement("img");
  likeIcon.src = "images/icon-heart.png";
  like.classList.add("post-icon-btn");
  like.setAttribute("alt", "Like this post");
  like.appendChild(likeIcon);
  const comment = document.createElement("button");
  const commentIcon = document.createElement("img");
  commentIcon.src = "images/icon-comment.png";
  comment.classList.add("post-icon-btn");
  comment.setAttribute("alt", "Leave a comment");
  comment.appendChild(commentIcon);
  const share = document.createElement("button");
  const shareIcon = document.createElement("img");
  shareIcon.src = "images/icon-dm.png";
  share.classList.add("post-icon-btn");
  share.setAttribute("alt", "Share this post");
  share.appendChild(shareIcon);

  const redHeart = document.createElement("img");
  redHeart.src = "images/red-heart.png";
  redHeart.classList.add("hidden");
  redHeart.classList.add("red-heart");
  like.appendChild(redHeart);

  const likeCount = document.createElement("p");
  likeCount.classList.add("like-count");
  likeCount.textContent = `${likes.toLocaleString()} likes`;

  const usernameCaption = document.createElement("p");
  usernameCaption.classList.add("username-caption");
  usernameCaption.innerHTML = `<strong>${username}</strong> ${userComment}`;

  const postImg = document.createElement("img");
  postImg.classList.add("post-img");
  postImg.alt = `Post by ${name}`;
  postImg.src = postimg;

  post.appendChild(userInfo);
  post.appendChild(postImg);
  post.appendChild(postBody);

  userInfo.appendChild(userAva);
  userInfo.appendChild(userNameContainer);

  userNameContainer.appendChild(userFullName);
  userNameContainer.appendChild(locationText);

  postBody.appendChild(postIcons);
  postBody.appendChild(likeCount);
  postBody.appendChild(usernameCaption);

  postIcons.appendChild(like);
  postIcons.appendChild(comment);
  postIcons.appendChild(share);

  main.appendChild(post);
  let isLiked = false;
  like.addEventListener("click", () => {
    if (!isLiked) {
      likeIcon.classList.add("hidden");
      redHeart.classList.remove("hidden");
    } else {
      likeIcon.classList.remove("hidden");
      redHeart.classList.add("hidden");
    }
    updateLikeCount();
  });
  postImg.addEventListener("dblclick", () => {
    if (!isLiked) {
      likeIcon.classList.add("hidden");
      redHeart.classList.remove("hidden");
      updateLikeCount();
    }
    redHeart.classList.remove("heart-pop");

    void redHeart.offsetWidth;

    redHeart.classList.add("heart-pop");
  });
  function updateLikeCount() {
    if (!isLiked) {
      likes++;
      likeCount.textContent = `${likes.toLocaleString()} likes`;
      isLiked = true;
    } else {
      likes--;
      likeCount.textContent = `${likes.toLocaleString()} likes`;
      isLiked = false;
    }
  }
}
for (i = 0; i < posts.length; i++) {
  createPost(
    posts[i].name,
    posts[i].username,
    posts[i].comment,
    posts[i].location,
    posts[i].avatar,
    posts[i].post,
    posts[i].likes,
  );
}
