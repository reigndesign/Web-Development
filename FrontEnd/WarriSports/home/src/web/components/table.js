const FixtureTable = () => {

  

  const fixtures = [
    {
      id: 1,
      homeTeam: "Team A",
      awayTeam: "Team B",
      date: "Oct 30",
      time: "19:00",
    },
    {
      id: 2,
      homeTeam: "Team C",
      awayTeam: "Team D",
      date: "Oct 30",
      time: "21:00",
    },
    {
      id: 3,
      homeTeam: "Team E",
      awayTeam: "Team F",
      date: "Oct 31",
      time: "18:30",
    },

  ];

  return (
    <>
      <div className="main--table grid mt-2">
        <table className="table-auto">
          <thead className="bg-gray-400 h-7">
            <tr className="font-thin text-sm">
              <th>Date</th>
              <th>1</th>
              <th>x</th>
              <th>2</th>
            </tr>
          </thead>
          <tbody>
            {fixtures.map((fixture) => (
              <tr key={fixture.id}>
                <td>{fixture.time}</td>
                <td>{fixture.homeTeam}</td>
                <td>{fixture.awayTeam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FixtureTable;
