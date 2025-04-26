import React from 'react'
import { AppBar, Toolbar, Box, Typography, Avatar, TextField, Button, IconButton, } from '@mui/material'
import Myim from '../assets/i1.png'
import im1 from '../assets/IMG20220725094527.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function HomePage() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5" color="inherit" sx={{ flexGrow: 50, ml: 5 }}>
                        Khanatsanan Khaiaojaroen
                        </Typography>
                        <Typography sx={{ flexGrow: 1 }}>Work</Typography>
                        <Typography sx={{ flexGrow: 1 }}>About</Typography>
                        <Typography sx={{ flexGrow: 1 }}>Contact</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ flexGrow: 1, backgroundColor: 'blue', height: '100%vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '70%', flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', my: 20 }}>
                    <Box sx={{ flexGrow: 1, }}>
                        <Typography variant='h3' color='white'>HI, I AM<br />Khanatsanan  K.</Typography>
                        <Typography color='white' sx={{ mt: 1 }}>นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย ที่มีความชอบในการสร้าง<br />เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2, gap: 2 }}>
                            <Button variant="contained" size='large' sx={{ height: 50, borderRadius: 10, backgroundColor: '#ccff90', color: 'black' }}>CONTACTME ●</Button>
                            <IconButton aria-label="fingerprint" color="secondary" sx={{ width: 50, height: 50, backgroundColor: '#212121', color: '#ccff90' }}><FontAwesomeIcon icon={faLinkedinIn} /></IconButton>
                            <IconButton aria-label="fingerprint" color="secondary" sx={{ width: 50, height: 50, backgroundColor: '#212121', color: '#ccff90' }}><FontAwesomeIcon icon={faGithub} /></IconButton>
                        </Box>
                    </Box>
                    <Avatar src={Myim} sx={{ flexGrow: 1, borderRadius: 10, width: 250, height: 700 }} />
                </Box>
                <hr style={{ width: '100%', border: '1px solid gray', margin: '20px 0' }} />
                <Box sx={{ width: '70%', flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', my: 5 }}>
                    <Typography variant='h3' color='white' sx={{ flexGrow: 1 }}>ABOUT ME</Typography>
                    <Box sx={{
                        flexGrow: 1, display: 'flex', flexDirection: 'column', maxWidth: '50%', marginLeft: 'auto'
                    }}>
                        < Typography variant='h5' color='white' > ฉันเป็นนักพัฒนาเว็ปไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ใน < br /> ภาคกลางประเทศไทย กำลังมองหาโอกาศที่น่าตื่นเต้นในการทำงาน<br /> มีพื้นบานการศึกษาด้านวิศวกรรมซอฟแวร์</Typography>
                        <Typography color='white' sx={{ mt: 1 }}>ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือรั้นและอยากรู้<br />อยากเห็นเกี่ยวกัยการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ<br />เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ฉันชอบอ่านหนังสือ เพื่อเพิ่มเติมความรู้ที่ขาดหายไป<br />กำลังเรียนรู้เพิ่มเติ่มเพื่อพัฒนาทักษะอยู่เสมอ</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, gap: 2 }}>
                            <Button variant="contained" size='large' sx={{ height: 50, borderRadius: 10, mt: 2, backgroundColor: '#ccff90', color: 'black' }}>DOWNLOAD RESUME ●</Button>
                            <IconButton aria-label="fingerprint" color="secondary" sx={{ width: 50, height: 50, mt: 2, backgroundColor: '#212121', color: '#ccff90' }}><FontAwesomeIcon icon={faLinkedinIn} /></IconButton>
                            <IconButton aria-label="fingerprint" color="secondary" sx={{ width: 50, height: 50, mt: 2, backgroundColor: '#212121', color: '#ccff90' }}><FontAwesomeIcon icon={faGithub} /></IconButton>
                        </Box>
                    </Box>
                </Box >
                <Avatar src={im1} sx={{ flexGrow: 1, borderRadius: 10, width: '70%', height: 700, mb: 5 }} />
                <hr style={{ width: '100%', border: '1px solid gray', margin: '20px 0' }} />
                <Box sx={{ width: '70%', flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', my: 5, mb: 7 }}>
                    <Typography variant='h3' color='white' sx={{ flexGrow: 1 }}>MY CAPABILITIES</Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', maxWidth: '50%', marginLeft: 'auto' }}>
                        <Typography color='white' >ฉันมองหาโอกาศในการเพิ่มทักษะใหม่ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์<br />การออกแบบ UX/UI ฐานข้อมูล</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, gap: 2 }}>
                            <Button variant="outlined" size='large' sx={{ height: 50, borderRadius: 10, mt: 2, borderColor: 'white', color: 'white' }}>HTML</Button>
                            <Button variant="outlined" size='large' sx={{ height: 50, borderRadius: 10, mt: 2, borderColor: 'white', color: 'white' }}>CSS</Button>
                            <Button variant="outlined" size='large' sx={{ height: 50, borderRadius: 10, mt: 2, borderColor: 'white', color: 'white' }}>JAVASCRIPT</Button>
                            <Button variant="outlined" size='large' sx={{ height: 50, borderRadius: 10, mt: 2, borderColor: 'white', color: 'white' }}>FLUTTER</Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                            <Button variant="outlined" size='large' sx={{ height: 50, borderRadius: 10, mt: 2, borderColor: 'white', color: 'white' }}>DART</Button>
                            <Button variant="outlined" size='large' sx={{ height: 50, borderRadius: 10, mt: 2, borderColor: 'white', color: 'white' }}>IoT</Button>
                            <Button variant="outlined" size='large' sx={{ height: 50, borderRadius: 10, mt: 2, borderColor: 'white', color: 'white' }}>REACT</Button>
                            <Button variant="outlined" size='large' sx={{ height: 50, borderRadius: 10, mt: 2, borderColor: 'white', color: 'white' }}>DATABASE</Button>
                        </Box>
                    </Box>
                </Box>
                <hr style={{ width: '100%', border: '1px solid gray', margin: '20px 0' }} />
                <Box sx={{ width: '70%', flexGrow: 1, display: 'flex', flexDirection: 'row', my: 5 }}>
                    <Typography variant='h3' color='white' sx={{ flexGrow: 1 }}>MY EXPERIENCE</Typography>
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', maxWidth: '50%', marginLeft: 'auto' }}>
                        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', gap: 33 }}>
                            <Typography variant='h5' color='white'>Freelancer Developer</Typography>
                            <Typography color='white' sx={{ mt: 1 }}>NOV 2023 - Present</Typography>
                        </Box>
                        <Typography color='white' sx={{ mt: 1 }}>พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้งสำหรับเว็ปแอปพลิเคชันโดยใช้ React.js<br />ทำงานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ<br />ปรับปรุงความเร็วในการโหลดเว็ปไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ<br />ร่วมพัฒนาและดูแลไลบารคอมโพเนนต์ภายในองค์กร
                        </Typography>
                        <Box sx={{ mt: 3, flexGrow: 1, display: 'flex', flexDirection: 'row', gap: 37 }}>
                            <Typography variant='h5' color='white'>Front-End Intern</Typography>
                            <Typography color='white' sx={{ mt: 1 }}>Sep 2023 - Nov 2023</Typography>
                        </Box>
                        <Typography color='white' sx={{ mt: 1 }}>
                            พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML,CSS และ JavaScript<br />
                            ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน<br />
                            WCAG<br />
                            ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
                        </Typography>
                    </Box>
                </Box>
                <hr style={{ width: '100%', border: '1px solid gray', margin: '20px 0' }} />
                <Box sx={{ width: '70%', flexGrow: 1, display: 'flex', flexDirection: 'row', mt: 5, }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', maxWidth: '50%', marginRight: 'auto' }}>
                        <Typography variant='h3' color='white' >LET'S CONNECT</Typography>
                        <Typography color='white' >Say hello at <Typography component="span" sx={{ textDecoration: "underline", textDecorationColor: "#ccff90" }}
                        >S6419410002@sau.ac.th</Typography></Typography>
                        <Typography color='white'> For more info. here's my  <Typography component="span" sx={{ textDecoration: "underline", textDecorationColor: "#ccff90" }}
                        >resume</Typography></Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, gap: 3 }}>
                            <FontAwesomeIcon color='#ccff90' icon={faLinkedinIn} style={{ fontSize: "30px" }} />
                            <FontAwesomeIcon color='#ccff90' icon={faGithub} style={{ fontSize: "30px" }} />
                            <FontAwesomeIcon color='#ccff90' icon={faXTwitter} style={{ fontSize: "30px" }} />
                            <FontAwesomeIcon color='#ccff90' icon={faInstagram} style={{ fontSize: "30px" }} />
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', maxWidth: '50%', marginLeft: 'auto' }}>
                        <Typography color='white' >Name</Typography>
                        <TextField id="filled-basic" variant="filled" sx={{
                            input: { color: "white" },
                            "& .MuiInputBase-root": { backgroundColor: "#212121" }, // เปลี่ยนพื้นหลัง
                            "& .MuiFilledInput-underline:before": { borderBottomColor: "#212121" }, // เส้นขีดก่อนโฟกัส
                            "& .MuiFilledInput-underline:after": { borderBottomColor: "#ccff90" }
                        }} />
                        <Typography color='white' sx={{ mt: 3 }} >Email</Typography>
                        <TextField id="filled-basic" variant="filled" sx={{
                            input: { color: "white" },
                            "& .MuiInputBase-root": { backgroundColor: "#212121" }, // เปลี่ยนพื้นหลัง
                            "& .MuiFilledInput-underline:before": { borderBottomColor: "#212121" }, // เส้นขีดก่อนโฟกัส
                            "& .MuiFilledInput-underline:after": { borderBottomColor: "#ccff90" }
                        }} />
                        <Typography color='white' sx={{ mt: 3 }} >Sucject</Typography>
                        <TextField id="filled-basic" variant="filled" sx={{
                            input: { color: "white" },
                            "& .MuiInputBase-root": { backgroundColor: "#212121" }, // เปลี่ยนพื้นหลัง
                            "& .MuiFilledInput-underline:before": { borderBottomColor: "#212121" }, // เส้นขีดก่อนโฟกัส
                            "& .MuiFilledInput-underline:after": { borderBottomColor: "#ccff90" }
                        }} />
                        <Typography color='white' sx={{ mt: 3 }} >Message</Typography>
                        <TextField id="filled-multiline"
                            variant="filled"
                            multiline
                            rows={4}
                            fullWidth sx={{
                                input: { color: "white" },
                                "& .MuiInputBase-root": { backgroundColor: "#212121" }, // เปลี่ยนพื้นหลัง
                                "& .MuiFilledInput-underline:before": { borderBottomColor: "#212121" }, // เส้นขีดก่อนโฟกัส
                                "& .MuiFilledInput-underline:after": { borderBottomColor: "#ccff90" }
                            }} />
                    </Box>
                </Box>
                <Box sx={{ width: '70%', flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'end', mt: 2, mb: 10 }}>
                    <Typography color='white' sx={{ flexGrow: 1, maxWidth: '50%', marginRight: 'auto' }}>© 2025 Khanatsanan Khaiaojaroen</Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button variant="contained" size='large' sx={{ height: 50, borderRadius: 10, backgroundColor: '#ccff90', color: 'black' }}> SUBMIT</Button>
                    </Box>
                </Box>
            </Box >
        </>
    )
}
