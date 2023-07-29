import React, { useEffect, useState } from "react";
import "../components/Blog.css";
import { Link, useParams } from "react-router-dom";
import "./Article.css";
import "./Responsive__.css";

function Article() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/blog/${blogs.id}/`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="article">
        <h2>{blogs.title}</h2>
        <ul>
          <li>
            We were able to run the cluster on smaller machines resulting in
            <b>~75%</b> reduction in individual instances’ <b>CPU</b> and
            <b>Memory</b> requirements.
          </li>
          <li>
            We observed significant improvement in average and tail latencies.
          </li>
          <li>
            Smaller index per shard also improved <b>scale-up</b> time by
            <b>~20%</b>.
          </li>
        </ul>
        <div className="social__media">
          <a href="https://www.facebook.com" target="_blank">
            <div className="face">
              <img src="https://www.facebook.com/sharer.php?u=https://blog.zomato.com/building-a-cost-effective-logging-platform-using-clickhouse-for-petabyte-scale&t=Building%20a%20cost-effective%20logging%20platform%20using%20Clickhouse%20for%20petabyte%20scale" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fblog.zomato.com%2Ffrom-the-streets-of-bharat"
            target="_blank"
          >
            <div className="linkedin">
              <img src="http://www.linkedin.com/shareArticle?mini=true&url=https://blog.zomato.com/building-a-cost-effective-logging-platform-using-clickhouse-for-petabyte-scale&title=Building%20a%20cost-effective%20logging%20platform%20using%20Clickhouse%20for%20petabyte%20scale" />
            </div>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <div className="twitter">
              <img src="http://twitter.com/intent/tweet?text=Building%20a%20cost-effective%20logging%20platform%20using%20Clickhouse%20for%20petabyte%20scale&url=https://blog.zomato.com/building-a-cost-effective-logging-platform-using-clickhouse-for-petabyte-scale" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Article;
