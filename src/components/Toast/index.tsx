import {
  closeSnackbar,
  useSnackbar,
  enqueueSnackbar,
  SnackbarContent,
} from "notistack";
import React, { forwardRef } from "react";
import WarnningIcon from "@/assets/icon/warnning_icon.png";
import SuccessIcon from "@/assets/icon/success_icon.png";
import ErrorIcon from "@/assets/icon/error_icon.png";
import CloseIcon from "@/assets/icon/close.png";
// import Card from "../Card";

const CustomSnackbar = forwardRef<HTMLDivElement, any>(
  ({ message, type,snackbarId }, ref) => {
    const getIcon = () => {
      switch (type) {
        case "success":
          return SuccessIcon;
        case "error":
          return ErrorIcon;
        case "warning":
          return WarnningIcon;
        default:
          return "#2196f3";
      }
    };
    const onClose = () => {
      closeSnackbar(snackbarId)
    }

    return (
      <SnackbarContent
        ref={ref} // 关键：转发 ref
      >
        <div
          className="border-[1px] border-sold border-[#2a3030] rounded-[16px]  p-[24px] select-none !bg-[#232B2B80] px-[16px] py-[9px] flex items-center justify-between"
          style={{ backdropFilter: `blur(40px)` }}
        >
          <div className="flex items-center">
            <img
              className="w-[20px] h-[20px] mr-[8px]"
              src={getIcon()}
              alt=""
            />
            <div className="text-[14px] leading-[22px] text-[#fff] max-w-[500px]">
              {message}
            </div>
          </div>

          <img src={CloseIcon} className="w-[20px] h-[20px] ml-[16px] cursor-pointer" onClick={onClose}></img>
        </div>
      </SnackbarContent>
    );
  }
);

interface ToastOptions {
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  content?: React.ReactNode;
  onAction?: () => void;
}

class ToastService {
  private enqueueSnackbar: any;

  public init(enqueueSnackbar: any) {
    this.enqueueSnackbar = enqueueSnackbar;
  }

  public show(message: string, options: ToastOptions = {}) {
    const { type = "info", duration = 3000, content, onAction } = options;

    const snackbarId = enqueueSnackbar("", {
      // 自定义内容
      content: (key) =>
        content || (
          <CustomSnackbar
          snackbarId={snackbarId}
            message={message}
            type={type}
          />
        ),
      // 配置
      autoHideDuration: duration,
      variant: type,
    });
  }

  // 快捷方法
  public success(message: string, options: Omit<ToastOptions, "type"> = {}) {
    this.show(message, { ...options, type: "success" });
  }

  // 快捷方法
  public warning(message: string, options: Omit<ToastOptions, "type"> = {}) {
    this.show(message, { ...options, type: "warning" });
  }

  public error(message: string, options: Omit<ToastOptions, "type"> = {}) {
    this.show(message, { ...options, type: "error" });
  }
}


// 导出单例
export const toast = new ToastService();

