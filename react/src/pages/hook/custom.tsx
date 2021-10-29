/**
 * 如何自定义 Hook
 */
import { Icon } from "@blueprintjs/core";
import { random } from "lodash";
import { useDebugValue, useEffect, useState } from "react";


type Friend = {
  id: string;
  name: string;
  gender: "M" | "F";
}

type Status = "online" | "offline";

type FriendStatus = {
  id: string;
  status: Status
}

/**
 * 定义获取 friend 列表及其状态的 API 类
 */
class ChatRoomAPI {
  // 定义保存 friend 信息的数据库
  // cspell: disable
  private static _friends: Array<Friend> = [
    { id: "PHRHCNvR0D80", name: "Alvin", gender: "M" },
    { id: "6gMh9uPNuazh", name: "Emma", gender: "F" },
    { id: "brUuZqLEqzBb", name: "Noah", gender: "M" },
    { id: "CDGBdkxvQ5YB", name: "Alexander", gender: "M" },
    { id: "Ekr2BUU9a2a0", name: "Isla", gender: "F" },
    { id: "szoTmGGQYbCF", name: "Alisson", gender: "F" },
    { id: "f6tEfifpipwY", name: "Riley", gender: "M" },
    { id: "QiUsAhBCm3w8", name: "Aubri", gender: "F" }
  ]
  // cspell: enable

  private _timer: any = null;

  // 保存 friend 状态的数据库
  private _friendsStatus = new Map<string, Status>();

  /**
   * 获取所有的 friend 信息
   */
  static get friends(): Array<Friend> {
    return ChatRoomAPI._friends;
  }

  /**
   * 注册回调函数，当 friend 状态发生变化时回调此函数
   */
  registerStatusCallbacks(callback: (status: FriendStatus) => void): void {
    if (this._timer) {
      clearInterval(this._timer);
    }

    const checkStatus = () => {
      // 获取一个 friend 对象
      const friend = ChatRoomAPI._friends[random(ChatRoomAPI._friends.length - 1)];
      // 获取该 friend 对象的新状态
      const newStatus = random(1) === 0 ? "offline" : "online";

      // 比较状态是否发生变化
      const status = this._friendsStatus.get(friend.id);
      if (status !== newStatus) {
        // 保存 friend 的新状态
        this._friendsStatus.set(friend.id, newStatus);
        // 回调，发送该 friend 的状态
        callback({ id: friend.id, status: newStatus })
      }
    }

    checkStatus();
    this._timer = setInterval(checkStatus, 5000);
  }

  /**
   * 关闭 API，不再发送 friend 的状态变化
   */
  close(): void {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }
}

type FriendWithStatus = Friend & {
  status: Status;
}


/**
 * 自定义 hook，检测 friend 状态变化
 */
const useFriendsStatus = (): Array<FriendWithStatus> => {
  // 定义 state，所有的 friend 和其状态
  const [friendWithStatus, setFriendWithStatus] = useState<Array<FriendWithStatus>>(ChatRoomAPI.friends.map(f => ({ ...f, status: "offline" })));
  const [newStatus, setNewStatus] = useState<FriendWithStatus | null>(null)

  useEffect(() => {
    const chatRoomApi = new ChatRoomAPI();

    // 注册回调函数
    chatRoomApi.registerStatusCallbacks(newStatus => {

      // 根据返回的 friend 状态，更新 friends 信息
      // 更新 friend 信息 state
      setFriendWithStatus(status => {
        return status.map(fws => {
          if (fws.id === newStatus.id) {
            const s = { ...fws, status: newStatus.status };
            setNewStatus(s);
            return s;
          }
          return { ...fws };
        })
      });
    });

    // 消除 effect，关闭 API
    return () => { chatRoomApi.close() };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 用于在 React Developer Tools 显示 debug 信息
  useDebugValue(newStatus, newStatus => `${newStatus?.name}(id=${newStatus?.id}) 状态被更新为: ${newStatus?.status}`);

  // 返回 friends 状态 state
  return friendWithStatus;
}


/**
 * friend 列表组件
 */
const OnlineFriendsList = (): JSX.Element => {
  // 使用自定义的 hook
  const friendWithStatus = useFriendsStatus();
  return (
    <ul className="px-4">
      {
        friendWithStatus.map(fws => (
          // 渲染 friends 信息和状态列表
          <li className={`flex items-center px-2 py-3 ${fws.status === "offline" ? "opacity-30" : "opacity-100"}`}
            key={fws.id}
          >
            <Icon icon="person" className={`${fws.gender === "M" ? "text-blue-500" : "text-rose-500"}`} />
            <span className="px-2">{fws.name}</span>
          </li>
        ))
      }
    </ul>
  );
}

const HookCustom = (): JSX.Element => {
  return (
    <div className="px-4 py-6">
      <p className="text-lg font-medium">Your friends are: </p>
      <OnlineFriendsList />
    </div>
  );
}

export default HookCustom;
