import {ITeam} from "@/services/Interfaces/Team";

export interface IClient {
    name: string | null;
    team: ITeam[] | null;
}
