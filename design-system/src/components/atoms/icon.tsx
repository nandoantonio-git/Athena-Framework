import * as React from "react"
import type { FunctionComponent, SVGProps } from "react"

import SvgAttachment from "@/assets/icons/Attachment.svg?react"
import SvgCloudCircle from "@/assets/icons/CloudCircle.svg?react"
import SvgCloudDone from "@/assets/icons/CloudDone.svg?react"
import SvgCloudDownload from "@/assets/icons/CloudDownload.svg?react"
import SvgCloudOff from "@/assets/icons/CloudOff.svg?react"
import SvgCloudQueue from "@/assets/icons/CloudQueue.svg?react"
import SvgCloudSync from "@/assets/icons/CloudSync.svg?react"
import SvgCloudUpload from "@/assets/icons/CloudUpload.svg?react"
import SvgFolderNew from "@/assets/icons/FolderNew.svg?react"
import SvgDownload from "@/assets/icons/Download.svg?react"
import SvgDownloadDone from "@/assets/icons/DownloadDone.svg?react"
import SvgDownloadOffline from "@/assets/icons/DownloadOffline.svg?react"
import SvgDownloading from "@/assets/icons/Downloading.svg?react"
import SvgFileMoveRight from "@/assets/icons/FileMoveRight.svg?react"
import SvgFileMoveLeft from "@/assets/icons/FileMoveLeft.svg?react"
import SvgFileRename from "@/assets/icons/FileRename.svg?react"
import SvgArquivar from "@/assets/icons/Arquivar.svg?react"
import SvgFileDownload from "@/assets/icons/FileDownload.svg?react"
import SvgFileDownloadOff from "@/assets/icons/FileDownloadOff.svg?react"
import SvgFileUpload from "@/assets/icons/FileUpload.svg?react"
import SvgFolder from "@/assets/icons/Folder.svg?react"
import SvgFolderOrganize from "@/assets/icons/FolderOrganize.svg?react"
import SvgFolderCopy from "@/assets/icons/FolderCopy.svg?react"
import SvgFolderOff from "@/assets/icons/FolderOff.svg?react"
import SvgFolderOpen from "@/assets/icons/FolderOpen.svg?react"
import SvgFolderShared from "@/assets/icons/FolderShared.svg?react"
import SvgFolderZip from "@/assets/icons/FolderZip.svg?react"
import SvgUpload from "@/assets/icons/Upload.svg?react"
import SvgUploadFile from "@/assets/icons/UploadFile.svg?react"
import SvgSettings from "@/assets/icons/Settings.svg?react"
import SvgFavorite from "@/assets/icons/Favorite.svg?react"
import SvgFavoriteBorder from "@/assets/icons/FavoriteBorder.svg?react"
import SvgFilter from "@/assets/icons/Filter.svg?react"
import SvgCopy from "@/assets/icons/Copy.svg?react"
import SvgArrowBack from "@/assets/icons/ArrowBack.svg?react"
import SvgArrowBackIos from "@/assets/icons/ArrowBackIos.svg?react"
import SvgArrowDown from "@/assets/icons/ArrowDown.svg?react"
import SvgArrowDropDown from "@/assets/icons/ArrowDropDown.svg?react"
import SvgArrowDropUp from "@/assets/icons/ArrowDropUp.svg?react"
import SvgArrowForward from "@/assets/icons/ArrowForward.svg?react"
import SvgArrowForwardIos from "@/assets/icons/ArrowForwardIos.svg?react"
import SvgArrowLeft from "@/assets/icons/ArrowLeft.svg?react"
import SvgArrowRight from "@/assets/icons/ArrowRight.svg?react"
import SvgArrowUp from "@/assets/icons/ArrowUp.svg?react"
import SvgChevronLeft from "@/assets/icons/ChevronLeft.svg?react"
import SvgChevronRight from "@/assets/icons/ChevronRight.svg?react"
import SvgFullscreen from "@/assets/icons/Fullscreen.svg?react"
import SvgHelp from "@/assets/icons/Help.svg?react"
import SvgSpatialAudioOff from "@/assets/icons/SpatialAudioOff.svg?react"
import SvgOrganize from "@/assets/icons/Organize.svg?react"
import SvgTagSet from "@/assets/icons/TagSet.svg?react"
import SvgGroup from "@/assets/icons/Group.svg?react"
import SvgLabel from "@/assets/icons/Label.svg?react"
import SvgShareFile from "@/assets/icons/ShareFile.svg?react"
import SvgSettings2 from "@/assets/icons/Settings2.svg?react"
import SvgShare from "@/assets/icons/Share.svg?react"
import SvgBookmark from "@/assets/icons/Bookmark.svg?react"
import SvgBookmarkBorder from "@/assets/icons/BookmarkBorder.svg?react"
import SvgMenuBook from "@/assets/icons/MenuBook.svg?react"
import SvgForum from "@/assets/icons/Forum.svg?react"
import SvgSlideshow from "@/assets/icons/Slideshow.svg?react"

import { cn } from "@/lib/utils"

type SvgComponent = FunctionComponent<SVGProps<SVGSVGElement>>

/**
 * Mapa `atom/Icon/<Nome>` (Figma-confirmado, Seção 2.1 de figma-inventory.md,
 * 44+ instâncias) → SVG real exportado do Figma via `download_assets`
 * (2026-08-11, decisão humana: fidelidade visual real, não aproximação por
 * nome). Substitui o mapeamento anterior por `lucide-react`, que usava o
 * glifo mais parecido por significado, não uma cópia do ícone Figma. Cada
 * arquivo em `src/assets/icons/<Nome>.svg` é o vetor exportado, com o fill
 * normalizado para `currentColor` (permite recolorir via CSS, igual
 * `lucide-react` fazia).
 */
const ICONS = {
  Attachment: SvgAttachment,
  CloudCircle: SvgCloudCircle,
  CloudDone: SvgCloudDone,
  CloudDownload: SvgCloudDownload,
  CloudOff: SvgCloudOff,
  CloudQueue: SvgCloudQueue,
  CloudSync: SvgCloudSync,
  CloudUpload: SvgCloudUpload,
  FolderNew: SvgFolderNew,
  Download: SvgDownload,
  DownloadDone: SvgDownloadDone,
  DownloadOffline: SvgDownloadOffline,
  Downloading: SvgDownloading,
  FileMoveRight: SvgFileMoveRight,
  FileMoveLeft: SvgFileMoveLeft,
  FileRename: SvgFileRename,
  Arquivar: SvgArquivar,
  FileDownload: SvgFileDownload,
  FileDownloadOff: SvgFileDownloadOff,
  FileUpload: SvgFileUpload,
  Folder: SvgFolder,
  FolderOrganize: SvgFolderOrganize,
  FolderCopy: SvgFolderCopy,
  FolderOff: SvgFolderOff,
  FolderOpen: SvgFolderOpen,
  FolderShared: SvgFolderShared,
  FolderZip: SvgFolderZip,
  Upload: SvgUpload,
  UploadFile: SvgUploadFile,
  Settings: SvgSettings,
  Favorite: SvgFavorite,
  FavoriteBorder: SvgFavoriteBorder,
  Filter: SvgFilter,
  Copy: SvgCopy,
  ArrowBack: SvgArrowBack,
  ArrowBackIos: SvgArrowBackIos,
  ArrowDown: SvgArrowDown,
  ArrowDropDown: SvgArrowDropDown,
  ArrowDropUp: SvgArrowDropUp,
  ArrowForward: SvgArrowForward,
  ArrowForwardIos: SvgArrowForwardIos,
  ArrowLeft: SvgArrowLeft,
  ArrowRight: SvgArrowRight,
  ArrowUp: SvgArrowUp,
  ChevronLeft: SvgChevronLeft,
  ChevronRight: SvgChevronRight,
  Fullscreen: SvgFullscreen,
  Help: SvgHelp,
  SpatialAudioOff: SvgSpatialAudioOff,
  Organize: SvgOrganize,
  TagSet: SvgTagSet,
  Group: SvgGroup,
  Label: SvgLabel,
  ShareFile: SvgShareFile,
  Settings2: SvgSettings2,
  Share: SvgShare,
  Bookmark: SvgBookmark,
  BookmarkBorder: SvgBookmarkBorder,
  MenuBook: SvgMenuBook,
  Forum: SvgForum,
  Slideshow: SvgSlideshow,
} as const satisfies Record<string, SvgComponent>

export type IconName = keyof typeof ICONS

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  /** Nome `atom/Icon/<Nome>` confirmado no Figma (figma-inventory.md, Seção 2). */
  name: IconName
}

/**
 * atom/Icon — glifo único e reutilizável para as instâncias de ícone soltas
 * na seção "Icon/" do Figma (Seção 2.1). Uma única API `name` em vez de um
 * componente por ícone: são o mesmo tipo de peça de design (glifo estático,
 * sem chrome, sem estado próprio) — modelar cada um como um componente
 * distinto seria abstração redundante, não fidelidade adicional.
 */
function Icon({ name, className, ...props }: IconProps) {
  const Glyph = ICONS[name]
  return (
    <Glyph
      data-slot="icon"
      data-icon-name={name}
      aria-hidden="true"
      className={cn("size-4", className)}
      {...props}
    />
  )
}

export { Icon, ICONS }
