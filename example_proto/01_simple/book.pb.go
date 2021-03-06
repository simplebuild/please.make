// Code generated by protoc-gen-go. DO NOT EDIT.
// source: example_proto/01_simple/book.proto

package book

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Book struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Book) Reset()         { *m = Book{} }
func (m *Book) String() string { return proto.CompactTextString(m) }
func (*Book) ProtoMessage()    {}
func (*Book) Descriptor() ([]byte, []int) {
	return fileDescriptor_a93565e33b0002d2, []int{0}
}

func (m *Book) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Book.Unmarshal(m, b)
}
func (m *Book) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Book.Marshal(b, m, deterministic)
}
func (m *Book) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Book.Merge(m, src)
}
func (m *Book) XXX_Size() int {
	return xxx_messageInfo_Book.Size(m)
}
func (m *Book) XXX_DiscardUnknown() {
	xxx_messageInfo_Book.DiscardUnknown(m)
}

var xxx_messageInfo_Book proto.InternalMessageInfo

func (m *Book) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Book) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func init() {
	proto.RegisterType((*Book)(nil), "Book")
}

func init() { proto.RegisterFile("example_proto/01_simple/book.proto", fileDescriptor_a93565e33b0002d2) }

var fileDescriptor_a93565e33b0002d2 = []byte{
	// 97 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4f, 0x4e, 0x4e, 0x29,
	0x8e, 0x2f, 0x28, 0xca, 0x2f, 0xc9, 0xd7, 0x37, 0x30, 0x8c, 0x2f, 0xce, 0xcc, 0x2d, 0xc8, 0x49,
	0xd5, 0x4f, 0xca, 0xcf, 0xcf, 0xd6, 0x03, 0x0b, 0x2a, 0x69, 0x71, 0xb1, 0x38, 0xe5, 0xe7, 0x67,
	0x0b, 0xf1, 0x71, 0x31, 0x65, 0xa6, 0x48, 0x30, 0x2a, 0x30, 0x6a, 0x70, 0x06, 0x31, 0x65, 0xa6,
	0x08, 0x09, 0x71, 0xb1, 0xe4, 0x25, 0xe6, 0xa6, 0x4a, 0x30, 0x81, 0x45, 0xc0, 0xec, 0x24, 0x36,
	0xb0, 0x16, 0x63, 0x40, 0x00, 0x00, 0x00, 0xff, 0xff, 0x1b, 0xb1, 0xfb, 0x2b, 0x55, 0x00, 0x00,
	0x00,
}
