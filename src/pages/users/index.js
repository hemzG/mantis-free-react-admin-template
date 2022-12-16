import React, { useState } from 'react';
import UserTable from './userTable';
import MainCard from 'components/MainCard';
import { Button, Drawer, Grid, Stack, InputLabel, OutlinedInput, Typography } from '@mui/material';

const Users = () => {
    const [state, setState] = useState(false);
    const toggleDrawer = (xy) => {
        setState(xy);
    };

    const addDrawer = () => {
        console.log('addDrawer');
        toggleDrawer(true);
        // return (
        //     <Drawer
        //         variant="temporary"
        //         anchor={'right'}
        //         open={true}
        //         onClose={() => {
        //             toggleDrawer(false);
        //         }}
        //         sx={{
        //             width: '500px'
        //         }}
        //     >
        //         HeLlo
        //         <button>hi</button>
        //     </Drawer>
        // );
    };
    return (
        <>
            <Button
                variant="outlined"
                onClick={() => {
                    addDrawer();
                }}
            >
                Add
            </Button>
            <Drawer
                variant="temporary"
                anchor={'right'}
                open={state}
                onClose={() => {
                    toggleDrawer(false);
                }}
            >
                <form>
                    <Grid container spacing={2} mt="100px" width="400px">
                        <Grid item xs={12} md={8} ml="30px">
                            <Typography variant="h4"> Add User</Typography>
                        </Grid>
                        <Grid item xs={12} md={8} ml="30px">
                            <Stack spacing={1}>
                                <InputLabel htmlFor="firstname">Name</InputLabel>
                                <OutlinedInput
                                    id="firstname"
                                    // value={values.firstname}
                                    name="firstname"
                                    // onBlur={handleBlur}
                                    // onChange={handleChange}
                                    placeholder="John"
                                    fullWidth
                                    // error={Boolean(touched.firstname && errors.firstname)}
                                />
                                {/* {touched.firstname && errors.firstname && (
                                <FormHelperText error id="helper-text-firstname-signup">
                                    {errors.firstname}
                                </FormHelperText>
                            )} */}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={8} ml="30px">
                            <Stack spacing={1}>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <OutlinedInput
                                    // error={Boolean(touched.email && errors.email)}
                                    id="email"
                                    type="email"
                                    // value={values.email}
                                    name="email"
                                    // onBlur={handleBlur}
                                    // onChange={handleChange}
                                    placeholder="demo@company.com"
                                    inputProps={{}}
                                />
                                {/* {touched.email && errors.email && (
                                <FormHelperText error id="helper-text-email-signup">
                                    {errors.email}
                                </FormHelperText>
                            )} */}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={8} ml="30px">
                            <Stack spacing={1}>
                                <InputLabel htmlFor="phone">Phone number</InputLabel>
                                <OutlinedInput
                                    // error={Boolean(touched.email && errors.email)}
                                    id="phone"
                                    type="number"
                                    // value={values.email}
                                    name="phone"
                                    // onBlur={handleBlur}
                                    // onChange={handleChange}
                                    // placeholder="demo@company.com"
                                    inputProps={{}}
                                />
                                {/* {touched.email && errors.email && (
                                <FormHelperText error id="helper-text-email-signup">
                                    {errors.email}
                                </FormHelperText>
                            )} */}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={8} ml="250px">
                            <Button variant="outlined" backgroundColor="blue">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Drawer>
            <MainCard sx={{ mt: 2 }} content={false}>
                <UserTable />
            </MainCard>
        </>
    );
};
export default Users;
