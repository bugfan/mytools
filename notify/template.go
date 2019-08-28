package notify

import (
	"bytes"
	"errors"
	"fmt"
	"text/template"
)

var templates = make(map[string]*Template)

type Template struct {
	Name        string
	Template    string
	template    *template.Template
	ProviderIDs map[string]string
}

func (t *Template) GetTemplate() (*template.Template, error) {
	temp, err := template.New(t.Name).Parse(t.Template)
	if err != nil {
		return nil, err
	}
	t.template = temp
	return temp, nil
}

func RegisterTemplate(t *Template) error {
	_, err := t.GetTemplate()
	if err != nil {
		return err
	}
	templates[t.Name] = t
	return nil
}

func GetTemplate(name string) (*template.Template, error) {
	t, has := templates[name]
	if !has {
		fmt.Printf("name: %s in %#v", name, templates)
		return nil, errors.New("template not found")
	}
	return t.template.Clone()
}

func Render(name string, data map[string]string) (string, error) {
	t, err := GetTemplate(name)
	if err != nil {
		return "", err
	}
	d := struct {
		Data map[string]string
	}{
		Data: data,
	}
	var tpl bytes.Buffer
	if err := t.Execute(&tpl, d); err != nil {
		return "", err
	}

	return tpl.String(), nil

}
