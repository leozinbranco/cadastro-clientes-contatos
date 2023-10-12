'use client'
import { Flex, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { columns, users } from '../../../../teste-data'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue } from '@nextui-org/react'
import { EditIcon } from '@/public/icons/edit-icon'
import { EyeIcon } from '@/public/icons/eye-icon'
import { DeleteIcon } from '@/public/icons/delete-icon'
// const statusColorMap: Record<string, ChipProps['color']> = {
//   active: 'success',
//   paused: 'danger',
//   vacation: 'warning'
// }

type User = typeof users[0]
export default function Home () {
  const renderCell = useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User]

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        )
      case 'role':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        )
      // case 'status':
      //   return (
      //     <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
      //       {cellValue}
      //     </Chip>
      //   )
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  return (
    <Flex flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} padding='6' alignItems='center' justifyContent='center'>
      {/* <Text>
        Apparently we had reached a great height in the atmosphere, for the
        sky was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside, the sable cloud beneath was dished out, and
        the car seemed to float in the middle of an immense dark sphere, whose
        upper half was strewn with silver. Looking down into the dark gulf
        below, I could see a ruddy light streaming through a rift in the
        clouds.</Text> */}
      {/* <Flex>

        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Flex> */}
    </Flex>
  )
}
