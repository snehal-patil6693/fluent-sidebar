import React, { useId} from 'react';
import { Image, Input} from "@fluentui/react-components";
import { SearchRegular, Settings16Filled } from '@fluentui/react-icons';
import { Menu, MenuButton, MenuItem, MenuList, MenuPopover, MenuTrigger } from "@fluentui/react-components";

function Header() {
    const beforeId = useId('content-before');
  return (
    <div className='header'>

    <div className='header-content'>
      <div style={{display:'flex', flexDirection:'column'}}>
    <Image
      alt="Allan's avatar"
      src="images/tagwaye.png"
      height={34}
      width={140}
    />
    </div>
    <div style={{display:'flex', flexDirection:'column'}}>
       {/*  <Label htmlFor={beforeId}>Search : </Label> */}
        <Input contentBefore={<SearchRegular />} id={beforeId} type='search' placeholder='Search' appearance='filled-lighter' size='medium'/>
       
    </div>
    <div style={{display:'flex', flexDirection:'column'}}>
    
    <div style={{display:'flex', flexDirection:'row'}}>
    <Image
      alt="Erik's avatar"
      shape="circular"
      src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/ErikNason.jpg"
      height={34}
      width={34}
      badge={{ status: 'available' }}
    />
    <Menu>
      <MenuTrigger>
      <MenuButton appearance="subtle" size='medium'>
    </MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem icon={<Settings16Filled />}>Settings</MenuItem>
          <MenuItem>About</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
    </div>
    </div>
    </div>

    </div>

    
  )
}

export default Header