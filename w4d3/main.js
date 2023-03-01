const createPostElement = (post) => {
  const { title, body, id } = post;

  const newArticle = $("<article>").attr("id", id);
  const newH1 = $("<h1>").text(`Post #${id} : ${title}`);
  const newP = $("<p>").text(body);

  newArticle.append(newH1);
  newArticle.append(newP);

  return newArticle;
};

const createAllThePosts = (listOfPosts) => {
  for (const post of listOfPosts) {
    const newPost = createPostElement(post);
    $("section").append(newPost);
  }
};

const addARandomPost = () => {
  const title = `Post #${Math.floor(Math.random() * 1000)}`;
  const newPost = createPostElement(title, "some lorem ipsum text.");
  newPost.click(changeBackgroundColorOfPost);
  newPost.dblclick(selfDestruct);

  $("section").append(newPost);
};

const addNextPost = () => {
  const lastId = Number($("article:last-of-type").attr("id"));
  const newId = 1 + lastId;

  $.ajax({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/posts/${newId}`,
  }).then((res) => {
    const newPost = createPostElement(res);
    newPost.click(changeBackgroundColorOfPost);
    newPost.dblclick(selfDestruct);

    $("section").append(newPost);
  });
};

const changeBackgroundColorOfPost = (event) => {
  console.log(event.currentTarget);
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r},${g},${b})`;

  $(event.currentTarget).css("background-color", color);
};

const selfDestruct = (event) => {
  $(event.currentTarget).remove();
};

const fetchFirstTenPosts = () => {
  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  }).then((res) => {
    const filteredPosts = res.filter((post) => post.id < 10);

    createAllThePosts(filteredPosts);
  });
};

const changeToCreateView = () => {
  $("button#create").click((event) => {
    $("div").remove();
    $("body").append(`
      <form>
        <input>
        <input>
      </form>
    `);
  });
};

$(document).ready(() => {
  const arrayOfTitles = [
    "Chicken, good or bad ?",
    "Potatoes, why they're the best",
    "Why Argentina over Chile?",
  ];

  // createAllThePosts(somePosts);
  fetchFirstTenPosts();
  // $("button").on("click", addARandomPost);
  $("button#load").click(addNextPost);

  $("article").click(changeBackgroundColorOfPost);

  $("article").dblclick(selfDestruct);

  changeToCreateView();
});

// $.ajax()

// $.get()

// $.post()

// $.put()

// $.delete()
