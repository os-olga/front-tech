import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./scheduleStyles";

const Schedule = ({ setWorkshift }) => {
  let startedTime = 0;

  const initial = [
    { day: "Monday", hours: [] },
    { day: "Tuesday", hours: [] },
    { day: "Wednesday", hours: [] },
    { day: "Thursday", hours: [] },
    { day: "Friday", hours: [] },
    { day: "Saturday", hours: [] },
    { day: "Sunday", hours: [] },
  ];
  const [schedules, setSchedules] = useState(initial);
  const times = [...Array(48).keys()];

  useEffect(() => {
    let schedulesData = [
      { day: "Monday", shifts: [] },
      { day: "Tuesday", shifts: [] },
      { day: "Wednesday", shifts: [] },
      { day: "Thursday", shifts: [] },
      { day: "Friday", shifts: [] },
      { day: "Saturday", shifts: [] },
      { day: "Sunday", shifts: [] },
    ];

    let clonedSchedules = [...schedules];

    clonedSchedules.forEach((schedule) => {
      schedule.hours = Array(48).fill(false);
      schedulesData.forEach((scheduleData) => {
        if (schedule.day === scheduleData.day) {
          scheduleData.shifts.forEach((shift) => {
            schedule.hours.forEach((hour, key) => {
              if (shift.start <= key && shift.end >= key) {
                schedule.hours[key] = true;
              }
            });
          });
        }
      });
    });

    setSchedules(clonedSchedules);
  }, [setSchedules]);

  const handleClick = (scheduleIndex, hourIndex) => {
    let clonedSchedules = [...schedules];
    let dayHours = clonedSchedules[scheduleIndex].hours;
    dayHours[hourIndex] = !dayHours[hourIndex];
    setSchedules(clonedSchedules);
    setWorkshift(clonedSchedules);
  };

  return (
    <>
      <Typography sx={{ ...styles.fieldTitle, margin: "40px 0" }}>
        DESIRABLE WORKSHIFT
      </Typography>
      <Box sx={styles.container}>
        <Box sx={styles.block}>
          <Box sx={styles.times}>
            {times.map((t, timeIndex) => {
              if (timeIndex % 2) {
                if (timeIndex > 1) {
                  startedTime++;
                }
                return (
                  <Typography sx={styles.time} key={timeIndex}>
                    {startedTime.toString().padStart(2, "0")}
                  </Typography>
                );
              }
            })}
          </Box>
        </Box>

        {schedules.map((schedule, scheduleIndex) => {
          return (
            <Box key={scheduleIndex} sx={styles.schedule}>
              <Box sx={{ width: "15%" }}>
                <Typography sx={{ paddingTop: "8px" }}>
                  {schedule.day}
                </Typography>
              </Box>

              <Box sx={styles.hoursBlock}>
                {schedule.hours.map((hour, hourIndex) => {
                  return (
                    <Box
                      key={hourIndex}
                      sx={{ ...styles.hourItem }}
                      onClick={() => handleClick(scheduleIndex, hourIndex)}
                    >
                      <Box
                        style={
                          hour
                            ? {
                              background: "#29CC8F",
                              height: "25px",
                              marginTop: "7px",
                            }
                            : { background: "transparent" }
                        }
                      >
                        {hour}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* <Box sx={styles.mobileView}>
        <Box sx={styles.mobileTimes}>
          <Box>
            {times.map((t, timeIndex) => {
              return (
                <Typography sx={styles.time} key={timeIndex}>
                  {t}
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Box sx={styles.schedulesContent}>
          {schedules.map((schedule, scheduleIndex) => {
            let day = schedule.day.substr(0, 3);
            return (
              <Box key={scheduleIndex} sx={styles.mobileSchedule}>
                <Box sx={{ marginBottom: "8px" }}>
                  <Typography>{day}</Typography>
                </Box>

                <Box>
                  {schedule.hours.map((hour, hourIndex) => {
                    return (
                      <Box
                        key={hourIndex}
                        sx={styles.hourItemMob}
                        style={
                          hour
                            ? { background: "#29CC8F", color: "transparent" }
                            : {
                                background: "transparent",
                                color: "transparent",
                              }
                        }
                        onClick={() => handleClick(scheduleIndex, hourIndex)}
                      >
                        {hour}12
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box> */}
    </>
  );
};

export default Schedule;
