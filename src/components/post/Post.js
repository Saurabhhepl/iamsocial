import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [post, setPost] = useState(null); // State for storing a single post
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1') // Fetch a single post by changing the URL
      .then(res => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch(error => {
        console.error('Error', error);
      });
  }, []);

  return (
    <div>
      {post && (
        <div className="post">
          <div className="container">
            <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div className="details">
                  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="name">{post.userId}</span>
                  </Link>
                  <span className="date">1 min ago</span>
                </div>
              </div>
              <MoreHorizIcon />
            </div>
            <div className="content">
              <p>{post.body}</p>
            </div>
            <div className="info">
              <div className="item">
                {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                12 Likes
              </div>
              <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon />
                12 Comments
              </div>
              <div className="item">
                <ShareOutlinedIcon />
                Share
              </div>
            </div>
            {commentOpen && <Comments />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
