import {baseUrl} from "./api";
import axios from "axios";

/**
 * 获取团队成员列表
 *
 * @see https://www.easyai.com
 */
export const getTeamUserList = (teamId) => axios.get(`${baseUrl}/api/team/users`, {
  params: {
    teamId: teamId,
    page: 0,
    size: 100
  }
});