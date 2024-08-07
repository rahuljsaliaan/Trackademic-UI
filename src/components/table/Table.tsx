import styled from 'styled-components';

interface TableColumnProps {
  width: string;
}

interface TableProps {
  columns: { name: string; width: string }[];
  rows: string[][];
}

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TableHeader = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid #4535ea;
  padding: 4px 0;
  font-size: 12px;
  color: #94a3b8;
  font-weight: 900;
`;

const TableRow = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid #d8dee7;
  padding: 8px 0;
  color: #282828;
  font-weight: 600;
  font-size: 12px;
  transition: border-bottom 0.3s ease;

  &:hover {
    border-bottom: 2px solid #4535ea;
    cursor: pointer;
  }
`;

const TableCell = styled.div<TableColumnProps>`
  flex: ${(props) => props.width};
`;

const Table: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <TableContainer>
      <TableHeader>
        {columns.map((column, index) => (
          <TableCell key={index} width={column.width}>
            {column.name}
          </TableCell>
        ))}
      </TableHeader>
      {rows.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <TableCell key={cellIndex} width={columns[cellIndex].width}>
              {cell}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableContainer>
  );
};

export default Table;
