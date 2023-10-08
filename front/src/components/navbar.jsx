import React from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper, MobileIcon,  } from './navbarElements'
import { PiFlowerTulipBold } from "react-icons/pi";
import { IconContext } from 'react-icons'
import { FaAlignJustify, FaFileSignature, FaHouseUser, FaImage, FaTimes } from "react-icons/fa";
import { useState } from 'react'

const Navbar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false)

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <PiFlowerTulipBold />
                        <p>Vector -</p>
                        <p>f(x)</p>
                    </LogoContainer>
                    <MobileIcon onClick={() => setMostrarMenu(!mostrarMenu)}>
                        {
                            mostrarMenu ? <FaTimes/> : <FaAlignJustify/>
                        }
                       
                    </MobileIcon>
                    <Menu open={mostrarMenu}>
                        <MenuItem>
                            <MenuItemLink onClick={() => setMostrarMenu(!mostrarMenu)}>
                                <div>
                                    <FaHouseUser />
                                </div>
                                HOME
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink to={"/muestra"}>
                                <div>
                                    <FaImage />
                                </div>
                                VER TODO
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink to={'/create'}>
                                <div>
                                    <FaFileSignature />
                                </div>
                                NUEVO INGRESO
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink to={'/turnos'}>
                                <div>
                                    <FaFileSignature />
                                </div>
                                TURNOS
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}

export default Navbar