const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/list", (req, res) => {
  const selectQuery = `
        SELECT  id,
                title,
                author,
                DATE_FORMAT(createdAt, "%Y년 %m월 %d일") as createdAt,
                hit
        FROM    cyworld
    `;

  try {
    db.query(selectQuery, (err, rows) => {
      if (err) {
        console.error(err);
        throw "데이베이스 접근 에러 발생";
      }
      return res.status(200).json(rows);
    });
  } catch (err) {
    console.error(err);
    return res.status(400).send("데이터를 불러올 수 없습니다.");
  }
});

router.post("/write", (req, res, next) => {
  const { _title, _author, _content } = req.body;
  const insertQuery = `
        INSERT INTO cyworld (title, author, content, createdAt)
        VALUES
        (
            "${_title}",
            "${_author}",
            "${_content}",
            now()
        )
    `;
  try {
    db.query(insertQuery, (err, result) => {
      if (err) {
        console.error(err);
        throw " 데이터 베이스 접근 에러 발생";
      }
      return res.status(200).json({ result: true });
    });
  } catch (err) {
    console.error(err);
    return res.status(400).send("게시글을 작성하는데 실패했습니다.");
  }
});

router.post("/content", (req, res, next) => {
  const { id } = req.body;
  console.log(id);
  const selectQuery = `
        SELECT  id,
                title,
                content,
                author
        FROM    cyworld
        WHERE   id = '${id}'
           
    `;
  try {
    db.query(selectQuery, (err, row) => {
      if (err) {
        console.error(err);
        throw "데이터베이스 접근 에러 발생";
      }
      return res.status(200).json(row);
    });
  } catch (err) {
    console.error(err);
    return res.status(400).send("데이터를 불러올 수 없습니다.");
  }
});

module.exports = router;
