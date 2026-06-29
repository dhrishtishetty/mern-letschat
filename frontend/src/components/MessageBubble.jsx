import { useState } from "react";
import { Trash2, Pencil, MoreVertical } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";
import { useChatStore } from "../store/useChatStore.js";
import { formatMessageTime } from "../lib/utils.js";

const MessageBubble = ({ message, selectedUser }) => {
  const { authUser } = useAuthStore();

  const { deleteMessage, editMessage } = useChatStore();

  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`chat ${
        message.senderId === authUser._id ? "chat-end" : "chat-start"
      }`}
    >
      <div className="chat-image avatar">
        <div className="size-10 rounded-full border">
          <img
            src={
              message.senderId === authUser._id
                ? authUser.profilePic || "/avatar.png"
                : selectedUser.profilePic || "/avatar.png"
            }
            alt="profile"
          />
        </div>
      </div>

      <div className="chat-header mb-1">
        <time className="text-xs opacity-50 ml-1">
          {formatMessageTime(message.createdAt)}
        </time>
      </div>

      <div className="relative group overflow-visible">

        {editingMessageId === message._id ? (

          <div className="chat-bubble p-2 w-56 flex flex-col gap-2">

            <input
              className="input input-xs input-bordered w-full h-8 text-sm"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  await editMessage(message._id, editedText);
                  setEditingMessageId(null);
                  setEditedText("");
                }
              }}
            />

            <div className="flex justify-end gap-1">

              <button
                className="btn btn-xs h-6 min-h-6 px-2"
                onClick={() => {
                  setEditingMessageId(null);
                  setEditedText("");
                }}
              >
                Cancel
              </button>

              <button
                className="btn btn-xs btn-primary h-6 min-h-6 px-2"
                onClick={async () => {
                  await editMessage(message._id, editedText);
                  setEditingMessageId(null);
                  setEditedText("");
                }}
              >
                Save
              </button>

            </div>
          </div>

        ) : (

          <>

            <div className="chat-bubble flex flex-col">

              {message.image && (
                <img
                  src={message.image}
                  alt="attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}

              {message.text && (
                <p>
                  {message.text}

                  {message.edited && (
                    <span className="text-xs opacity-60 ml-2">
                      (edited)
                    </span>
                  )}

                </p>
              )}

            </div>


            {message.senderId === authUser._id && (

              <>

                <button
                  className="btn btn-xs btn-circle absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <MoreVertical size={15}/>
                </button>


                {showMenu && (

                  <div className="absolute right-0 top-8 z-50 w-44 rounded-xl bg-base-100 border border-base-300 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">


                    <button
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-base-200 transition-colors"
                      onClick={() => {
                        setEditingMessageId(message._id);
                        setEditedText(message.text);
                        setShowMenu(false);
                      }}
                    >
                      <Pencil size={16}/>
                      <span>Edit</span>
                    </button>


                    <button
                      className="w-full flex items-center gap-3 px-3 py-2 text-error hover:bg-error hover:text-error-content transition-colors"
                      onClick={() => {
                        deleteMessage(message._id);
                        setShowMenu(false);
                      }}
                    >
                      <Trash2 size={16}/>
                      <span>Delete</span>
                    </button>


                  </div>

                )}

              </>

            )}

          </>

        )}

      </div>
    </div>
  );
};

export default MessageBubble;