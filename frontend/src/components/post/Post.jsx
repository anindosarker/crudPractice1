import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTittle">
          Lorem ipsum dolor sit amet consectetur
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dicta quae earum repudiandae aperiam ratione fugiat! Est ratione quia
          earum nam esse? Ab facilis commodi fugit possimus illo id sit? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ex
          quisquam eveniet quam nulla consequuntur perferendis sunt possimus
          aliquam dicta, vero voluptatibus eius fugit obcaecati, repudiandae
          saepe quas laudantium non. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur delectus sequi provident nam voluptatibus
          consequuntur accusamus accusantium mollitia quae animi? Blanditiis
          eligendi consequuntur delectus accusamus. Iusto consectetur quibusdam
          perferendis sed! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Cupiditate commodi autem, soluta suscipit architecto odio hic
          sequi in dolores perspiciatis cumque. Qui reiciendis accusamus
          laboriosam, voluptatibus incidunt sint amet rem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quidem, alias pariatur hic soluta,
          in error iusto suscipit ipsum animi, impedit esse possimus assumenda
          temporibus cupiditate! Provident libero minima reprehenderit sunt!
        </p>
      </div>
    </div>
  );
}
