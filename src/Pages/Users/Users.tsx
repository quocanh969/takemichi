/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import { Table } from "../../Components";
import { User } from "../../Models";
import { getAddressStr } from "../../Utils";

const transformTableData = (users: User[]) =>
  users.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    address: getAddressStr(user.address),
    phone: user.phone,
    website: user.website,
    company: user.company.name,
  }));

export const Users = () => {
  const data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
  ];
  const tableData = useMemo(() => transformTableData(data), [data]);
  return <Table data={tableData} />;
};
