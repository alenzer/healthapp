import React, { useEffect, useState } from "react";
import {
  Main,
  SideBarCont,
  ModelAnalytics,
  SidebarItems,
  ItemsHead,
  Breaker,
  ContSettings,
} from "./SidebarElements";

import { AiOutlineUserAdd } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import { TbLayoutGrid, TbSettings, TbLungs } from "react-icons/tb";
import { MdAutoGraph, MdSettingsInputComponent } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { FaHeartbeat, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import analysis from "../asset/analysis-small.png";
import cardiogram from "../asset/cardiogram-small.png";
import axios from "axios";

const SideBar = (props) => {
  const [userRole, setUserRole] = useState();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!Cookies.get("accessToken")) {
  //     console.log("no Token");
  //     setTimeout(() => {
  //       navigate("/signin");
  //     });
  //   } else if (Cookies.get("accessToken")) {
  //     setUserRole(Cookies.get("role"));
  //     console.log(userRole);
  //   }
  // });

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Main>
      <SideBarCont>
        <ModelAnalytics>
          <SidebarItems onClick={refreshPage}>
            <FiRefreshCw />
            <ItemsHead>Refresh Model</ItemsHead>
          </SidebarItems>
          <SidebarItems>
            <TbLayoutGrid />
            <ItemsHead>Default Layout</ItemsHead>
          </SidebarItems>
          {(props.module == "Main Module" && (
            <SidebarItems>
              <MdAutoGraph />
              <ItemsHead>Analyse Data</ItemsHead>
            </SidebarItems>
          )) ||
            (props.module == "Pulmonary Module" && (
              <SidebarItems onClick={() => navigate("/pulmonarymodule")}>
                <TbLungs />
                <ItemsHead>Analyse Respiration</ItemsHead>
              </SidebarItems>
            )) ||
            (props.module == "Cardio Module" && (
              <SidebarItems onClick={() => navigate("/cardioanalyse")}>
                <FaHeartbeat />
                <ItemsHead>Analyse ECG</ItemsHead>
              </SidebarItems>
            )) ||
            (props.module == "Cardio Trend Analysis" && (
              <SidebarItems onClick={() => navigate("/")}>
                <FaHeartbeat />
                <ItemsHead>Analyse ECG</ItemsHead>
              </SidebarItems>
            ))}
          {/* <SidebarItems style={userRole=="User" ? {cursor:"no-drop"} : null} onClick={userRole == "User" ? null : props.module == "Reports" ?props.handleRSaOff  :props.handleRS}> */}
          <SidebarItems onClick={() => navigate("/Reports")}>
            <RiFileList3Line />
            <ItemsHead>Generate Report</ItemsHead>
          </SidebarItems>
        </ModelAnalytics>
        <Breaker></Breaker>
        <ContSettings>
          <SidebarItems
            onClick={() => navigate("/InputsOutputs")}
            style={userRole == "User" ? { cursor: "no-drop" } : null}
          >
            <MdSettingsInputComponent />
            <ItemsHead>Inputs/Outputs</ItemsHead>
          </SidebarItems>
          <SidebarItems
            onClick={() => navigate("/Users")}
            style={userRole == "User" ? { cursor: "no-drop" } : null}
          >
            <FaUserAlt />
            <ItemsHead>View Users</ItemsHead>
          </SidebarItems>
          <SidebarItems
            style={userRole == "User" ? { cursor: "no-drop" } : null}
          >
            <GiBrain />
            <ItemsHead>Neural Networks</ItemsHead>
          </SidebarItems>
          <SidebarItems
            // onClick={() => navigate("/ecg")}
            style={userRole == "User" ? { cursor: "no-drop" } : null}
          >
            <a
              target="_blank"
              href="https://app.cardiolyse.com/patients"
              rel="noreferrer"
              style={{ width: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={analysis} width="16" />
                <ItemsHead>Live ECG</ItemsHead>
              </div>
            </a>
          </SidebarItems>
          {/* <SidebarItems onClick={() => navigate('/cardiolyse')} style={userRole == "User" ? { cursor: "no-drop" } : null}>
            <img src={cardiogram} width="16" />
            <ItemsHead>Holter Analysis</ItemsHead>
          </SidebarItems> */}
          <SidebarItems
            style={userRole == "User" ? { cursor: "no-drop" } : null}
          >
            <TbSettings />
            <ItemsHead>Settings</ItemsHead>
          </SidebarItems>
          <Breaker></Breaker>
          <SidebarItems
            style={userRole == "User" ? { cursor: "no-drop" } : null}
            onClick={userRole == "User" ? null : () => navigate("/dashboard")}
          >
            <AiOutlineUserAdd />
            <ItemsHead>Add</ItemsHead>
          </SidebarItems>
        </ContSettings>
      </SideBarCont>
    </Main>
  );
};

export default SideBar;
