package templatemethod

import "testing"

func TestTemplate(*testing.T) {
	var downloader Downloader = NewHTTPDownloader()

	downloader.Download("http://example.com/abc.zip")
	// Output:
	// prepare downloading
	// download http://example.com/abc.zip via http
	// http save
	// finish downloading

	var downloader2 Downloader = NewFTPDownloader()

	downloader2.Download("ftp://example.com/abc.zip")
	// Output:
	// prepare downloading
	// download ftp://example.com/abc.zip via ftp
	// default save
	// finish downloading
}
