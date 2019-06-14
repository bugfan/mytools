func (i *Session) ForwardTo(target string) error {
	url, err := url.Parse(target)
	if err != nil {
		return err
	}

	i.Req.URL.Host = url.Host
	i.Req.URL.Scheme = url.Scheme
	i.Req.Header.Set("X-Forwarded-Host", i.Req.Header.Get("Host")) // set first host
	i.Req.Host = url.Host

	forwarder := httputil.NewSingleHostReverseProxy(url)
	forwarder.ServeHTTP(i.Res, i.Req)
	return nil
}
