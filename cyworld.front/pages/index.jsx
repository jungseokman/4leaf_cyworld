import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button, Table } from "antd";
import axios from "axios";

const FirstWrapper = styled.div`
  width: 100%;
`;

const App = () => {
  const [list, setList] = useState([]);
  const columns = [
    {
      title: "번호",
      dataIndex: "id",
    },
    {
      title: "제목",
      render: (data) => (
        <Link href={{ pathname: "/detail", query: { id: data.id } }}>
          {data.title}
        </Link>
      ),
    },
    { title: "작성자", dataIndex: "author" },
    {
      title: "작성일",
      dataIndex: "createdAt",
    },
    {
      title: "조회수",
      dataIndex: "hit",
    },
  ];
  const getCyworldList = async (req, res, next) => {
    const result = await axios.get("http://localhost:4000/api/cyworld/list");
    setList(result.data);
  };

  useEffect(() => {
    getCyworldList();
  }, []);
  return (
    <>
      <FirstWrapper>
        <h1>CYWORLD</h1>

        <Table size="small" columns={columns} dataSource={list} rowKey="id" />
        <Link href="/write">
          <a>
            <Button>글 작성</Button>
          </a>
        </Link>
      </FirstWrapper>
    </>
  );
};

export default App;
