import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1606343647114-3cf38d47ded4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTittle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Anindo</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          magnam numquam et odio molestiae eum iure maiores? Fugit eveniet
          consequatur magnam voluptate illo rerum distinctio placeat accusamus
          iste numquam, ex, inventore modi sapiente voluptatem impedit? Itaque
          tempore dolorem rem, voluptas placeat numquam. Reiciendis nobis nisi
          magnam! Eius, adipisci excepturi recusandae repellendus doloremque
          pariatur ad sed asperiores nesciunt autem cumque nihil id eum repellat
          est quod dolor assumenda esse minima quas molestiae mollitia laborum
          earum delectus. Repudiandae reprehenderit architecto quidem at non
          magnam officia exercitationem tempora mollitia veniam! Quod nemo
          placeat totam amet veniam explicabo fugit eligendi, ducimus, quos
          molestias molestiae porro quo perspiciatis rerum neque tempora
          dignissimos. Dolores impedit mollitia voluptate pariatur. Debitis
          libero assumenda nam voluptatibus quis ex ipsa aut suscipit rerum
          asperiores alias distinctio amet quod atque, fugit repudiandae harum
          rem aperiam. Dolor repellendus necessitatibus, dolore cumque inventore
          saepe repellat ut ipsa porro aut, ipsam suscipit laborum illo nostrum
          tempore sit, officia commodi explicabo. Aliquam tenetur minus
          asperiores, nihil fugit voluptates reprehenderit dolorem. Blanditiis
          eaque sint, animi architecto nemo ut nostrum aperiam perferendis
          officiis tempore quam. Necessitatibus minus corrupti aliquam fugiat
          consequuntur voluptatum, porro esse dolorem suscipit non accusantium
          asperiores odio aliquid repudiandae recusandae in cumque vel corporis?
        </p>
      </div>
    </div>
  );
}
