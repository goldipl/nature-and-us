import React from "react";
import downloadIcon from "./../../../public/icons/home/download_files_section/download.svg";
import Link from "next/link";

const FilesDownloadSection = () => {
  return (
    <div className="download-files">
      <div className="download-files-wrapper">
        <div className="download-files-box">
          <div className="download-files-box-title">
            <div className="download-files-box-title__left">
              <span>Pliki do pobrania</span>
            </div>
            <div className="download-files-box-title__right">
              <Link href="">wszystkie</Link>
            </div>
          </div>
          <div className="download-files-box-content">
            <div className="download-files-box-content-row">
              <div className="download-files-box-content-row__left">
                <p className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque et nibh ante. Nam tincidunt urna eget nulla fringilla
                  nibh ante. Nam tincidunt urna eget nulla fringilla.
                </p>
              </div>
              <div className="download-files-box-content-row__right">
                <div className="download-btn">
                  <Link href="">
                    <img
                      src={downloadIcon.src}
                      alt="Pobierz"
                      width={8}
                      height={8.75}
                    />
                    <span>Pobierz</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="download-files-box-content-row">
              <div className="download-files-box-content-row__left">
                <p className="title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque et nibh ante. Nam tincidunt urna eget nulla fringilla
                  nibh ante. Nam tincidunt urna eget nulla fringilla.
                </p>
              </div>
              <div className="download-files-box-content-row__right">
                <div className="download-btn">
                  <Link href="">
                    <img
                      src={downloadIcon.src}
                      alt="Pobierz"
                      width={8}
                      height={8.75}
                    />
                    <span>Pobierz</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilesDownloadSection;
