/**
 * 构造器选项
 */
interface VideoOptions {
  className?: string
  playsinline?: boolean
  autoplay?: boolean
  x5VideoPlayerType?: string
}

/**
 * 创建视频类, 用于显式摄像头捕捉的视频
 */
export class Video {
  // 构造器选项
  _options: VideoOptions;

  // video 元素实例
  _element?: HTMLVideoElement;

  /**
   * 构造器
   *
   * @param options 选项对象
   */
  constructor(options: VideoOptions) {
    this._options = options;
  }

  /**
   * 开始播放摄像头视频
   *
   * @param mediaStream 摄像头视频流对象
   */
  start(mediaStream: MediaStream): void {
    if (this._element) {
      this._element.srcObject = mediaStream;
    }
  }

  /**
   * 停止播放摄像头视频
   */
  stop(): void {
    if (this._element) {
      this._element.srcObject = null;
    }
  }

  /**
   * 对 video 标签内容进行截图
   *
   * @returns 截图数据
   */
  capture(): string {
    if (!this._element) {
      return '';
    }

    // 获取 video 标签的宽度和高度
    const width = this._element.clientWidth;
    const height = this._element.clientHeight;

    // 创建画布对象
    const canvas = document.createElement('canvas');

    // 设置画布的宽度和高度, 和 video 元素一致
    canvas.width = width;
    canvas.height = height;

    // 从画布中获取绘图上下文, 将 video 元素绘制在其上
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(this._element, 0, 0, width, height);

    // 将画布内容转化为字符串返回
    return canvas.toDataURL('image/png');
  }

  render($parent: Element): Element {
    const $video = document.createElement('video');

    const opt = this._options;
    if (opt.className) {
      $video.className = opt.className;
    }
    if (opt.playsinline) {
      $video.setAttribute('playsinline', 'true');
    }
    if (opt.autoplay) {
      $video.setAttribute('autoplay', 'true');
    }
    if (opt.x5VideoPlayerType) {
      $video.setAttribute('x5-video-player-type', opt.x5VideoPlayerType);
    }

    this._element = $video;
    $parent.appendChild($video);
    return $video;
  }
}
